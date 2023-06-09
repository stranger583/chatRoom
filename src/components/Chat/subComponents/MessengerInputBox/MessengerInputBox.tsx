import {useEffect, useRef} from 'react';

import { emojiIcon, LikeIcon, PictureIcon, CloseIcon } from "../../../Icons/Icons";
import styles from "./MessengerInputBox.module.scss";

import { addDoc,serverTimestamp, CollectionReference, DocumentData } from "firebase/firestore";

interface I_MessengerInputBox {
    textareaValue: string;
    setTextareaValue:React.Dispatch<React.SetStateAction<string>>
    messengerRef:CollectionReference<DocumentData>
    yourReply:I_yourReply
    handleReply:(replyID:string, replyText:string)=> void
}

interface I_yourReply {
  replyID:string,
  replyText:string
}

interface ExtendedHTMLInputElement extends HTMLInputElement {
  composing: boolean;
}

function MessengerInputBox({textareaValue,setTextareaValue,messengerRef,yourReply,handleReply}:I_MessengerInputBox) {

    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const submitButtonRef = useRef<HTMLButtonElement>(null);

    
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      event.target?.value;
      setTextareaValue(event.target.value);
    };

    const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(textareaValue === "") return;
        await addDoc(messengerRef, {
            text: textareaValue,
            createdAt: serverTimestamp(),
            user:"阿臻",
            room:"room1",
            reply:{...yourReply},
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

    
    useEffect(() => {
      if (!textareaRef.current) return
      textareaRef.current.style.height = "0" + "px";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }, [textareaRef, textareaValue]);

  return (
    <>
    {yourReply.replyText.length !== 0 && <div className={styles.yourReplyContainer}>
        <div className={styles.yourReplyPerson}>
            <div>正在回覆{"denny00337"}</div>
            <p>{yourReply.replyText}</p>
        </div>
        <button onClick={() => handleReply("","")}>
            <div>{CloseIcon}</div>
        </button>
    </div>}
    <form onSubmit={handleSubmit} className={styles.messenger_box_body_inputBox}>
            <span>{emojiIcon}</span>
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
    </>

  )
}

export default MessengerInputBox