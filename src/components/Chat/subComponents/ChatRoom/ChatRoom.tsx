import ProfileAvatar from "../../../ProfileAvatar/ProfileAvatar"
import styles from "./ChatRoom.module.scss"

function ChatRoom() {
  return (
    <div className={styles.ChatRoom}>
      <ProfileAvatar isStoryControl={false}/>
      <div className={styles.ChatRoom_box} >
        <p className={styles.ChatRoom_title}>宗本聰</p>
        <p className={styles.ChatRoom_context}>{`${"你好!!!!"}．${"1天"}`}</p>
      </div>
    </div>

  )
}

export default ChatRoom