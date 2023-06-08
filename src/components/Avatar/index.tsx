import img from "./img/海豚俠.png"
import Styles from "./Styles.module.scss"

interface I_Avatar {
    userPhoto?: string | undefined
}

function Avatar({userPhoto}:I_Avatar) {

        return (
            <div className={Styles.avatar}>
                <img src={userPhoto??img} alt="海豚俠" />
            </div>
        )
}

export default Avatar