import Avatar from "../../../Avatar"
import styles from './MessengerContainer.module.scss'
import {useEffect, useState } from 'react';
import {  onSnapshot, where, query, CollectionReference, DocumentData } from "firebase/firestore";

interface I_MessengerContainer {
    messengerRef:CollectionReference<DocumentData>
}
interface I_reatedAt{
    nanoseconds:number;
    seconds:number;
}

interface I_Messenger {
    text:string;
    user:string;
    room:string;
    id:string;
    createdAt:I_reatedAt;
}

function MessengerContainer({messengerRef}:I_MessengerContainer) {
    const [messages, setMessages] = useState<{ id: string; }[]| never[]>([]);

    const room = "room1";
    

    useEffect(()=>{
        const queryMessenger = query(messengerRef,where("room", "==", room));

        onSnapshot(queryMessenger,(snapshot)=>{
            const messages: { id: string; }[] = [];
            snapshot.forEach((doc)=>{
                messages.push({...doc.data(),id:doc.id})
            })

            messages.sort((a, b) => a.createdAt - b.createdAt);
            setMessages(messages)
        })

        
    },[])
    console.log(messages)

  return (
    <div className={styles.messenger_box_body_dialogueContainer}>
            <div className={styles.messenger_box_body_dialogueContainer_context}>

              <div className={styles.dialogueBlock}>
                <div className={styles.dialogueBlock_date}>{"昨天10:44 上午"}</div>
                {messages && messages.length > 0 && messages.map((message) => {
                    
                    return (
                        <div className={`${styles.otherDialogue} ${message.user === "宗本聰" && styles.selfDialogue}`} key={message.id}>
                            <div className={styles.avatarBlock}>
                                <Avatar />
                            </div>
                            <div className={styles.textBox}>
                                <div className={styles.reply}>已回覆你</div>
                                <div className={styles.replyContainer}>
                                <div className={styles.replyContainer_box}>
                                    放放放假放放放假
                                    放放放假放放放假
                                    放放放假放放放假
                                </div>
                                </div>
                            <div className={styles.dialogue}>
                                <p>{message.text}</p>
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