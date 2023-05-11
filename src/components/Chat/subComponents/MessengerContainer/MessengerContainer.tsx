import Avatar from "../../../Avatar"
import styles from './MessengerContainer.module.scss'
import {useEffect, useState } from 'react';
import {  onSnapshot, where, query, CollectionReference, DocumentData, Timestamp } from "firebase/firestore";
import { emojiIcon, ReplyIcon } from "../../../Icons/Icons";

interface I_MessengerContainer {
    messengerRef:CollectionReference<DocumentData>
}
interface I_reatedAt{
    nanoseconds:Date;
    seconds:Date;
}

interface I_Messenger {
    text:string;
    user:string;
    room:string;
    id:string;
    createdAt:I_reatedAt;
    reply:string;
}

function MessengerContainer({messengerRef}:I_MessengerContainer) {
    const [messages, setMessages] = useState<I_Messenger[]| never[]>([]);
    const room = "room1";
    
    const handleReply = (replyText :string) => {
        console.log(replyText)
        
    }

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
                    const replyMessage = messages.find((msg) => msg.id === message.reply) ?? undefined;

                    return (
                        <div className={`${styles.otherDialogue} ${message.user === "宗本聰" && styles.selfDialogue}`} key={message.id}>
                            <div className={styles.avatarBlock}>
                                <Avatar />
                            </div>
                            <div className={styles.textBox}>
                                { message.reply && replyMessage && <div>
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
                                    <button onClick={() => handleReply(message.text)}>{ReplyIcon}</button>
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