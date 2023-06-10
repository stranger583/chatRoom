import ProfileAvatar from "../../../ProfileAvatar/ProfileAvatar"
import styles from "./ChatRoom.module.scss"

interface I_Chatroom {
  userInfo:I_userData
  handleChangeRoomInfo:(userData:I_userData) => void;

}
interface I_userData {
  displayName: string,
  email: string,
  accessToken:string,
  uid: string,
  authAvator:string,
}

function ChatRoom({userInfo,handleChangeRoomInfo}:I_Chatroom) {
  const {displayName,authAvator} = userInfo
  return (
    <div className={styles.ChatRoom} onClick={() => handleChangeRoomInfo(userInfo)}>
      <ProfileAvatar authAvator={authAvator}/>
      <div className={styles.ChatRoom_box} >
        <p className={styles.ChatRoom_title}>{displayName}</p>
        <p className={styles.ChatRoom_context}>{`${"你好!!!!"}．${"1天"}`}</p>
      </div>
    </div>

  )
}

export default ChatRoom