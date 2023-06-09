import img from "./img/海豚俠.png"
import Styles from "./ProfileAvatar.module.scss"

interface I_ProfileAvatar {
  authAvator:string
}

function ProfileAvatar({authAvator}:I_ProfileAvatar) {

  return (
    <div className={Styles.profileAvatar}>
        <div className={Styles.imgBox}>
            <img src={authAvator??img} alt="avatar" />
        </div>
    </div>

  )
}

export default ProfileAvatar