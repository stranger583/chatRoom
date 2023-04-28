import styles from "./Chat.module.scss"
import ChatRoom from "./subComponents/ChatRoom/ChatRoom";
import Avatar from "../Avatar";
import { PhoneIcon, VideoIcon, InfoIcon, emojiIcon, LikeIcon, PictureIcon } from "../Icons/Icons";
import { useState, useRef, useEffect } from "react";


function Chat() {
  const [textareaValue, setTextareaValue] = useState("");

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.target?.value;
    setTextareaValue(event.target.value);
  };

  useEffect(() => {
    if (!textareaRef.current) return
    textareaRef.current.style.height = "0" + "px";
    textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
  }, [textareaRef.current, textareaValue]);



  return (
    <div className={styles.messenger}>
      <div className={styles.messenger_list}>
        <div className={styles.messenger_list_head}>
          <span className={styles.messenger_list_head_title}>{"stranger_000"}</span>
        </div>
        <div className={styles.messenger_list_body}>
          <div className={styles.messenger_list_body_top}>
            <span>{"訊息"}</span>
            <span>{"1則陌生訊息"}</span>
          </div>
          <ChatRoom />
          <ChatRoom />
          <ChatRoom />
          <ChatRoom />
          <ChatRoom />
          <ChatRoom />
          <ChatRoom />
          <ChatRoom />
          <ChatRoom />
          <ChatRoom />
          <ChatRoom />

        </div>

      </div>
      <div className={styles.messenger_box}>
        <div className={styles.messenger_box_head}>
          <div className={styles.messenger_box_head_avatar}>
            <Avatar />
            <span className={styles.messenger_box_head_avatarName}>{"宗本聰"}</span>
          </div>
          <div className={styles.messenger_box_head_iconBar}>
            <span>{PhoneIcon}</span>
            <span>{VideoIcon}</span>
            <span>{InfoIcon}</span>
          </div>

        </div>
        <div className={styles.messenger_box_body}>
          <div className={styles.messenger_box_body_dialogueContainer}>
            <div className={styles.messenger_box_body_dialogueContainer_context}>

              <div className={styles.dialogueBlock}>
                <div className={styles.dialogueBlock_date}>{"昨天10:44 上午"}</div>

                <div className={styles.otherDialogue}>
                  <Avatar />
                  <div className={styles.dialogue}>
                    <p>你好 !!!</p>
                    <p>今天領薪水 !</p>
                  </div>
                </div>

                <div className={styles.selfDialogue}>
                  <div className={styles.dialogue}>
                    <p>你好 !!!</p>
                    <p>今天領薪水 !</p>
                  </div>
                </div>

                <div className={styles.otherDialogue}>
                  <Avatar />
                  <div className={styles.dialogue}>
                    <p>星期五</p>
                    <p>要放假了要放假了要放假了要放假了要放假了要放假了要放假了要放假了要放假了</p>
                  </div>
                </div>

                <div className={styles.selfDialogue}>
                  <div className={styles.dialogue}>
                    <p>星期五</p>
                    <p>要放假了要放假了要放假了要放假了要放假了要放假了要放假了要放假了要放假了</p>
                  </div>
                </div>
              </div>
              
              <div className={styles.dialogueBlock}>
                <div className={styles.dialogueBlock_date}>{"昨天10:44 上午"}</div>

                <div className={styles.otherDialogue}>
                  <Avatar />
                  <div className={styles.dialogue}>
                    <p>你好 !!!</p>
                    <p>今天領薪水 !</p>
                  </div>
                </div>

                <div className={styles.selfDialogue}>
                  <div className={styles.dialogue}>
                    <p>你好 !!!</p>
                    <p>今天領薪水 !</p>
                  </div>
                </div>

                <div className={styles.otherDialogue}>
                  <Avatar />
                  <div className={styles.dialogue}>
                    <p>星期五</p>
                    <p>要放假了要放假了要放假了要放假了要放假了要放假了要放假了要放假了要放假了</p>
                  </div>
                </div>

                <div className={styles.selfDialogue}>
                  <div className={styles.dialogue}>
                    <p>星期五</p>
                    <p>要放假了要放假了要放假了要放假了要放假了要放假了要放假了要放假了要放假了</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className={styles.messenger_box_body_inputBox}>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat