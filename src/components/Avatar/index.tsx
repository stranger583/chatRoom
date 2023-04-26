import img from "./img/海豚俠.png"
import Styles from "./Styles.module.scss"


function Avatar() {
    
        return (
            <div className={Styles.avatar}>
                <img src={img} alt="海豚俠" />
            </div>
        )
}

export default Avatar