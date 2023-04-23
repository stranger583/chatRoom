import styles from "./NavBar.module.scss"
import { HomeIcon, MessengerIcon, PostIcon,SearchIcon, MoreIcon } from "../Icons/Icons"


function NavBar() {
  return (
    <div className={styles.navBar}>
      <div className={styles.navBar_logo}>
        <a href="#">PROTOTYPE</a>
      </div>
      <ul className={styles.navBar_nav}>
        <li>
          <a href="#"><div className={styles.icon}>{HomeIcon}</div> Home</a>
        </li>
        <li>
          <a href="#"><div className={styles.icon}>{SearchIcon}</div> Search</a>
        </li>
        <li>
          <a href="#"><div className={styles.icon}>{MessengerIcon}</div> Messenger</a>
        </li>
        <li>
          <a href="#"><div className={styles.icon}>{PostIcon}</div> Post</a>
        </li>
        <li>
          <a href="#"><div className={styles.icon}>{PostIcon}</div> Profile</a>
        </li>
      </ul>
      <div className={styles.navBar_more}>
        <a href="#"><div>{MoreIcon}</div> More</a>
      </div>
    </div>
  )
}

export default NavBar