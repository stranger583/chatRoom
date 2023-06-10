import ChatRoom from "../ChatRoom/ChatRoom"
import styles from './MessengerList.module.scss'

import {  onSnapshot, where, query, collection } from "firebase/firestore";
import { db } from "../../../../firebase-config";
import { useEffect, useState } from "react";



interface I_MessengerList {
  userData:I_userData;
  handleChangeRoomInfo:(userData:I_userData) => void;
}
interface I_userData {
  displayName: string,
  email: string,
  accessToken:string,
  uid: string,
  authAvator:string,
}

function MessengerList({userData,handleChangeRoomInfo}:I_MessengerList) {

  const [usersInfos, setUsersInfos] = useState<I_userData[]>()

  useEffect(()=>{
    const queryMessenger = query(collection(db,"users"),where("uid", "!=" ,userData.uid));
    onSnapshot(queryMessenger,(snapshot) => {
      const users: I_userData[] = [];
            snapshot.forEach((doc)=>{
                const data = doc.data() as I_userData;
                users.push({...data})
            })
      setUsersInfos(users)
    })
  },[])  


  return (
    <div className={styles.messenger_list}>
        <div className={styles.messenger_list_head}>
          <span className={styles.messenger_list_head_title}>{userData?.displayName}</span>
        </div>
        <div className={styles.messenger_list_body}>
          <div className={styles.messenger_list_body_top}>
            <span>{"訊息"}</span>
            <span>{"1則陌生訊息"}</span>
          </div>
          {usersInfos && usersInfos.length > 0 && usersInfos.map((userInfo,i)=>{
          return <ChatRoom key={i} userInfo={userInfo} handleChangeRoomInfo={handleChangeRoomInfo}/>
          })}
          {/* <ChatRoom />
          <ChatRoom />
          <ChatRoom />
          <ChatRoom />
          <ChatRoom />
          <ChatRoom />
          <ChatRoom />
          <ChatRoom />
          <ChatRoom />
          <ChatRoom /> */}

        </div>

      </div>
  )
}

export default MessengerList