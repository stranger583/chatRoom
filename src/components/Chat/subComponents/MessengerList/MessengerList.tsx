import ChatRoom from "../ChatRoom/ChatRoom"
import styles from './MessengerList.module.scss'

function MessengerList() {
  return (
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
  )
}

export default MessengerList