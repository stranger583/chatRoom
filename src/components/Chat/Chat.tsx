import {useEffect, useRef, useState} from 'react';

import styles from "./Chat.module.scss"
import MessengerList from "./subComponents/MessengerList/MessengerList";
import MessengerContainer from "./subComponents/MessengerContainer/MessengerContainer";
import MessengerInputBox from "./subComponents/MessengerInputBox/MessengerInputBox";

import Avatar from "../Avatar";
import { PhoneIcon, VideoIcon, InfoIcon } from "../Icons/Icons";

import { db } from "../../firebase-config";
import { collection,doc, setDoc,getDoc,onSnapshot } from "firebase/firestore";


import { changeLoginData } from  "../Login/ChangeLoginData"
import { I_yourReply,I_userData,I_Messenger } from '../../interface';


function Chat() {

  const [textareaValue, setTextareaValue] = useState("");
  const messengerRef = collection(db,"messenger")

  const [yourReply, setYourReply] = useState<I_yourReply>({replyID:"",replyText:""})

  const [userData, setUserData] = useState<I_userData>()

  const [roomUserData, setRoomUserData] = useState<I_userData>()

  const [messageData, setMessageData] = useState<I_Messenger[]| never[]>([])


  const createMessengerKey = useRef(false);

  const handleChangeRoomInfo = async(userData:I_userData) => {
    setRoomUserData(userData)
    createMessengerKey.current = true 
    // 新增房間
    setYourReply({replyID:"", replyText:""})
    
  }
  
  const handleReply = (messageId : string, replyText : string) => {
    const newReplyObject ={replyID:messageId, replyText:replyText} 
    setYourReply({...newReplyObject})
  }

  const combinedToRoom = () => {
    const sortUsersId =  [roomUserData?.uid,userData?.uid].sort()
    const roomId =`${sortUsersId[0]+" "+sortUsersId[1]}`
    return roomId
  }

  const fetchNewMessengerInfo = () => {
    const queryMessenger = doc(db, "newMessenger", combinedToRoom())
    if(roomUserData?.displayName && userData?.displayName) return queryMessenger
    return doc(db, "newMessenger", combinedToRoom()) //之後改成沒資料抓第一個聊天室，注意會有 undefined 導致第一次渲染失敗
  }

  const createMessengerForm = async () => {
    await setDoc(doc(db,"newMessenger",combinedToRoom() ),{textArray:[],},{merge:true});
  }
  const checkMessengerForm = async () => {
    const response = await getDoc(doc(db,"newMessenger",combinedToRoom() ));
    const isMessengerExist = response.exists()
    if(!createMessengerKey.current ||  isMessengerExist ) return 
    createMessengerForm()
    createMessengerKey.current = false

  }

  useEffect(()=>{
    changeLoginData(setUserData)
  },[])
 
  useEffect(()=>{
    const queryMessenger = fetchNewMessengerInfo()

    onSnapshot(queryMessenger,(snapshot)=>{
      const messages: I_Messenger[] = [];
      snapshot.data()?.textArray && snapshot.data()?.textArray.forEach((doc:I_Messenger,i:number)=> {
        const data = doc as I_Messenger;
        messages.push({...data,id:i.toString()})
      })
        setMessageData(messages)

    })
  },[roomUserData?.displayName])

  useEffect(()=> {
    checkMessengerForm()
  },[messageData])


  if(!userData || !messageData) return <div></div>

  return (
    <div className={styles.messenger}>
      <MessengerList userData={userData} handleChangeRoomInfo={handleChangeRoomInfo}/>
      <div className={styles.messenger_box}>
        <div className={styles.messenger_box_head}>
          <div className={styles.messenger_box_head_avatar}>
            <Avatar userPhoto={roomUserData?.authAvator}/>
            <span className={styles.messenger_box_head_avatarName}>{ roomUserData?.displayName??"宗本聰"}</span>
          </div>
          <div className={styles.messenger_box_head_iconBar}>
            <span>{PhoneIcon}</span>
            <span>{VideoIcon}</span>
            <span>{InfoIcon}</span>
          </div>
        </div>

        <div className={styles.messenger_box_body}>
          <MessengerContainer messengerRef={messengerRef} handleReply={handleReply} userData={userData} roomUserData={roomUserData} messageData={messageData} />
          <MessengerInputBox 
            textareaValue={textareaValue} 
            setTextareaValue={setTextareaValue} 
            messengerRef={messengerRef} 
            yourReply={yourReply}
            handleReply={handleReply}
            roomUserData={roomUserData}
            userData={userData}
            messageData={messageData}
            combinedToRoom={combinedToRoom}
          />
        </div>
      </div>
    </div>
  )
}

export default Chat