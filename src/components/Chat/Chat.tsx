import {useEffect, useState} from 'react';

import styles from "./Chat.module.scss"
import MessengerList from "./subComponents/MessengerList/MessengerList";
import MessengerContainer from "./subComponents/MessengerContainer/MessengerContainer";
import MessengerInputBox from "./subComponents/MessengerInputBox/MessengerInputBox";

import Avatar from "../Avatar";
import { PhoneIcon, VideoIcon, InfoIcon } from "../Icons/Icons";

import { db } from "../../firebase-config";
import { collection } from "firebase/firestore";

import { changeLoginData } from  "../Login/ChangeLoginData"


interface I_yourReply {
  replyID:string,
  replyText:string
}

interface I_userData {
  displayName: string,
  email: string,
  accessToken:string,
  uid: string,
  authAvator:string,
}

function Chat() {

  const [textareaValue, setTextareaValue] = useState("");
  const messengerRef = collection(db,"messenger")

  const [yourReply, setYourReply] = useState<I_yourReply>({replyID:"",replyText:""})

  const [userData, setUserData] = useState<I_userData>()

  useEffect(()=>{
    changeLoginData(setUserData)
  },[])
  


  const handleReply = (messageId : string, replyText : string) => {
    const newReplyObject ={replyID:messageId, replyText:replyText} 
    setYourReply({...newReplyObject})
  }
  
  if(!userData) return

  return (
    <div className={styles.messenger}>
      <MessengerList userData={userData}/>
      <div className={styles.messenger_box}>
        <div className={styles.messenger_box_head}>
          <div className={styles.messenger_box_head_avatar}>
            <Avatar/>
            <span className={styles.messenger_box_head_avatarName}>{"宗本聰"}</span>
          </div>
          <div className={styles.messenger_box_head_iconBar}>
            <span>{PhoneIcon}</span>
            <span>{VideoIcon}</span>
            <span>{InfoIcon}</span>
          </div>
        </div>

        <div className={styles.messenger_box_body}>
          <MessengerContainer messengerRef={messengerRef} handleReply={handleReply} userData={userData}/>
          <MessengerInputBox 
            textareaValue={textareaValue} 
            setTextareaValue={setTextareaValue} 
            messengerRef={messengerRef} 
            yourReply={yourReply}
            handleReply={handleReply}
          />
        </div>
      </div>
    </div>
  )
}

export default Chat