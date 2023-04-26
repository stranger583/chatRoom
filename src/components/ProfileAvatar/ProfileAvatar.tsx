import img from "./img/海豚俠.png"
import Styles from "./ProfileAvatar.module.scss"
interface I_ProfileAvatar {
    isStoryControl:true|false;
}

function ProfileAvatar({ isStoryControl }:I_ProfileAvatar) {
    
    if(isStoryControl) {
        return (
            <div className={Styles.avatar}>
                <img src={img} alt="海豚俠" />
            </div>
        )
    }

  return (
    <div className={Styles.profileAvatar}>
        <div className={Styles.imgBox}>
            <img src={img} alt="avatar" />
        </div>
    </div>

  )
}

export default ProfileAvatar