import Avatar from "../../../Avatar"
import styles from './MessengerContainer.module.scss'
import { CollectionReference, DocumentData } from "firebase/firestore";
import { emojiIcon, ReplyIcon } from "../../../Icons/Icons";
import { useEffect, useRef } from "react";

interface I_MessengerContainer {
    messengerRef:CollectionReference<DocumentData>
    handleReply:(replyID:string, replyText:string)=> void;
    userData:I_userData;
    roomUserData:I_userData| undefined;
    messageData:I_Messenger[];
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
    send:string;
    isShow:boolean;
    id:string;
    createdAt:I_reatedAt;
    reply:I_yourReply;
}
interface I_yourReply {
    replyID:string,
    replyText:string
  }

  

function MessengerContainer({userData,handleReply,roomUserData,messageData}:I_MessengerContainer) {
    const messages = messageData;
    const dialogueBlockRef = useRef(null);

    useEffect(()=> {
        if(!dialogueBlockRef.current) return
        (dialogueBlockRef.current as any).scrollIntoView({
            behavior: "smooth",
            block: "end",
        })
            // dialogueBlockRef.current!.scrollTop = dialogueBlockRef.current!.scrollHeight        
    },[roomUserData,messageData])

  return (
    <div className={styles.messenger_box_body_dialogueContainer}>
            <div className={styles.messenger_box_body_dialogueContainer_context}>

              <div className={styles.dialogueBlock} ref={dialogueBlockRef}>
                <div className={styles.dialogueBlock_date}>{"昨天10:44 上午"}</div>
                {messages && messages.length > 0 && messages.map((message) => {
                    const replyMessage = messages.find((msg) => msg.id === message.reply?.replyID) ?? undefined;
                    return (
                        <div className={`${styles.otherDialogue} ${message.send === userData?.displayName && styles.selfDialogue}`} key={message.id}>
                            <div className={styles.avatarBlock}>
                                <Avatar userPhoto={roomUserData?.authAvator}/>
                            </div>
                            <div className={styles.textBox} onClick={() => handleReply(message.id, message.text)}>
                                { message.reply?.replyText && replyMessage && <div>
                                    <div className={styles.reply}>你已回覆</div>
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