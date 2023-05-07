import {useEffect, useRef, useState} from 'react';
import { emojiIcon, LikeIcon, PictureIcon } from "../../../Icons/Icons";
import styles from "./MessengerInputBox.module.scss";
import { addDoc,collection,serverTimestamp, onSnapshot, where, query, CollectionReference, DocumentData } from "firebase/firestore";

interface I_MessengerInputBox {
    textareaValue: string;
    setTextareaValue:React.Dispatch<React.SetStateAction<string>>
    messengerRef:CollectionReference<DocumentData>

}

function MessengerInputBox({textareaValue,setTextareaValue,messengerRef}:I_MessengerInputBox) {

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    
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
        });
        setTextareaValue("");

    }
    
    useEffect(() => {
      if (!textareaRef.current) return
      textareaRef.current.style.height = "0" + "px";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }, [textareaRef, textareaValue]);

  return (
    <form onSubmit={handleSubmit} className={styles.messenger_box_body_inputBox}>
            <span>{emojiIcon}</span>
            <textarea
              onChange={handleChange}
              placeholder="訊息......"
              value={textareaValue}
              ref={textareaRef}
            />            
            <div className={styles.messenger_box_body_inputBox_iconBar}>
              <span>{PictureIcon}</span>
              <span>{LikeIcon}</span>
              <button type='submit'>submit</button>
            </div>
    </form>
  )
}

export default MessengerInputBox