import styles from "./Chat.module.scss"
import ChatRoom from "./subComponents/ChatRoom/ChatRoom";


function Chat() {
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
        <div className={styles.messenger_box_head}></div>
        <div className={styles.messenger_box_body}></div>
      </div>
    </div>
  )
}

export default Chat