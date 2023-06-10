import Avatar from "../../../Avatar"
import styles from './MessengerContainer.module.scss'
import {useEffect, useState } from 'react';
import {  onSnapshot, where, query, CollectionReference, DocumentData } from "firebase/firestore";
import { emojiIcon, ReplyIcon } from "../../../Icons/Icons";

interface I_MessengerContainer {
    messengerRef:CollectionReference<DocumentData>
    handleReply:(replyID:string, replyText:string)=> void;
    userData:I_userData;
    roomUserData:I_userData;
}
interface I_reatedAt{
    nanoseconds:number;
    seconds:number;
}

interface I_userData {
    displayName: string,
    email: string,
    accessToken:string,
    uid: string,
    authAvator:string,
  }

interface I_Messenger {
    text:string;
    user:string;
    room:string;
    id:string;
    createdAt:I_reatedAt;
    reply:I_yourReply;
}
interface I_yourReply {
    replyID:string,
    replyText:string
  }

  

function MessengerContainer({userData,messengerRef,handleReply,roomUserData}:I_MessengerContainer) {
    const [messages, setMessages] = useState<I_Messenger[]| never[]>([]);
    const room = "room1";

    useEffect(()=>{
        const queryMessenger = query(messengerRef,where("room", "==", room));
        onSnapshot(queryMessenger,(snapshot)=>{
            const messages: I_Messenger[] = [];
            snapshot.forEach((doc)=>{
                const data = doc.data() as I_Messenger;
                messages.push({...data,id:doc.id})
            })

            messages.sort((a, b) => new Date(a.createdAt.seconds).getTime() - new Date(b.createdAt.seconds).getTime());
            setMessages(messages)
        })
        
    },[])
    

  return (
    <div className={styles.messenger_box_body_dialogueContainer}>
            <div className={styles.messenger_box_body_dialogueContainer_context}>

              <div className={styles.dialogueBlock}>
                <div className={styles.dialogueBlock_date}>{"昨天10:44 上午"}</div>
                {messages && messages.length > 0 && messages.map((message) => {
                    const replyMessage = messages.find((msg) => msg.id === message.reply?.replyID) ?? undefined;
                    return (
                        <div className={`${styles.otherDialogue} ${message.user === userData?.displayName && styles.selfDialogue}`} key={message.id}>
                            <div className={styles.avatarBlock}>
                                <Avatar userPhoto={roomUserData?.authAvator}/>
                            </div>
                            <div className={styles.textBox} onClick={() => handleReply(message.id, message.text)}>
                                { message.reply?.replyText && replyMessage && <div>
                                    <div className={styles.reply}>已回覆你</div>
                                    <div className={styles.replyContainer}>
                                    <div className={styles.replyContainer_box}>
                                        {replyMessage?.text}
                                    </div>
                                </div>
                                </div>}
                                <div className={styles.dialogueBox}>
                                    <div className={styles.dialogue}>
                                        <p>{message.text}</p>
                                    </div>
                                    <button>{emojiIcon}</button>
                                    <button onClick={() => handleReply(message.id, message.text)}>{ReplyIcon}</button>
                                </div>
                                
                            </div>
                        </div>
                    )
                })}
              </div>
              
            </div>

          </div>
  )
}

export default MessengerContainer