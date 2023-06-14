import {useEffect, useRef, useState} from 'react';

import { emojiIcon, LikeIcon, PictureIcon, CloseIcon } from "../../../Icons/Icons";
import styles from "./MessengerInputBox.module.scss";
import { db } from '../../../../firebase-config';
import {  updateDoc, doc, CollectionReference, DocumentData, arrayUnion,Timestamp } from "firebase/firestore";

import { I_Messenger,I_userData,I_yourReply } from '../../../../interface';
import EmojiPanel from '../EmojiPanel/EmojiPanel';
interface I_MessengerInputBox {
    textareaValue: string;
    setTextareaValue:React.Dispatch<React.SetStateAction<string>>;
    messengerRef:CollectionReference<DocumentData>;
    yourReply:I_yourReply;
    handleReply:(replyID:string, replyText:string)=> void;
    roomUserData:I_userData| undefined;
    userData:I_userData| undefined;
    messageData:I_Messenger[] | never[];
    combinedToRoom:()=>string
}

interface ExtendedHTMLInputElement extends HTMLInputElement {
  composing: boolean;
}

function MessengerInputBox({textareaValue,setTextareaValue,yourReply,handleReply,userData,messageData,combinedToRoom}:I_MessengerInputBox) {

    const [isEmojiPanelOpen,setIsEmojiPanelOpen] = useState(false)
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const submitButtonRef = useRef<HTMLButtonElement>(null);

    const yourReplyID = +yourReply.replyID
    
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      event.target?.value;
      setTextareaValue(event.target.value);
    };
    const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(textareaValue === "") return;
        const queryMessenger = doc(db, "newMessenger", combinedToRoom())
        const message  = {
          text: textareaValue,
          createdAt:Timestamp.now(),
          send:userData?.displayName,
          reply:{...yourReply},
          isShow: true,
          id:messageData.length,
        }
        await updateDoc(queryMessenger, {
          textArray:arrayUnion(message)
          });

        setTextareaValue("");

    }
    const handleKeyDown = (event:React.KeyboardEvent ) => {
        if(event.key === "Enter" && !event.shiftKey) {
          const inputElement = event.target as ExtendedHTMLInputElement;
            if(inputElement.composing === true) return;
            event.preventDefault();
            event.stopPropagation();   
            handleReply("","")
            submitButtonRef.current?.click()
        }
    }
    const handleCompositionStart = (event:React.CompositionEvent<HTMLTextAreaElement>) => {
      const inputElement = event.target as ExtendedHTMLInputElement;
      inputElement.composing = true;
    }
    const handleCompositionEnd = (event:React.CompositionEvent<HTMLTextAreaElement>) =>{
      const inputElement = event.target as ExtendedHTMLInputElement;
      inputElement.composing = false;
    }
    const handleToggleEmojiPanel = () => {
      setIsEmojiPanelOpen(prev=> !prev)
    }


    useEffect(() => {
      if (!textareaRef.current) return
      textareaRef.current.style.height = "0" + "px";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }, [textareaRef, textareaValue]);

  return (
    <div className={styles.MessengerInputBox}>
    {isEmojiPanelOpen && <EmojiPanel setTextareaValue={setTextareaValue} />}
    {yourReply.replyText.length !== 0 && <div className={styles.yourReplyContainer}>
        <div className={styles.yourReplyPerson}>
            <div>正在回覆{messageData[yourReplyID].send}</div>
            <p>{yourReply.replyText}</p>
        </div>
        <button onClick={() => handleReply("","")}>
            <div>{CloseIcon}</div>
        </button>
    </div>}
    <form onSubmit={handleSubmit} className={styles.messenger_box_body_inputBox}>
            <span onClick={handleToggleEmojiPanel}>{emojiIcon}</span>
            <textarea
              onChange={handleChange}
              placeholder="訊息......"
              value={textareaValue}
              ref={textareaRef}
              onKeyDown={handleKeyDown}
              onCompositionStart={handleCompositionStart}
              onCompositionEnd={handleCompositionEnd}
            />            
            <div className={styles.messenger_box_body_inputBox_iconBar}>
              <span>{PictureIcon}</span>
              <span>{LikeIcon}</span>
              <button type='submit' hidden ref={submitButtonRef}>submit</button>
            </div>
    </form>
    </div>

  )
}

export default MessengerInputBox