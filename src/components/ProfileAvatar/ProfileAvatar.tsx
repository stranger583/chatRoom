import img from "./img/海豚俠.png"
import Styles from "./ProfileAvatar.module.scss"


function ProfileAvatar() {

  return (
    <div className={Styles.profileAvatar}>
        <div className={Styles.imgBox}>
            <img src={img} alt="avatar" />
        </div>
    </div>

  )
}

export default ProfileAvatar