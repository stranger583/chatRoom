import styles from "./NavBar.module.scss"
import { HomeIcon, MessengerIcon, PostIcon,SearchIcon, MoreIcon } from "../Icons/Icons"
import { Link } from "react-router-dom"
import Avatar from "../Avatar"
import { useState, useEffect } from "react"
import { changeLoginData } from  "../Login/ChangeLoginData"
import { I_userData } from "../../interface"


function NavBar() {

  const [userData, setUserData] = useState<I_userData>()
  
  useEffect(()=>{
    changeLoginData(setUserData)
  },[])


  return (
    <div className={styles.navBar}>
      <div className={styles.navBar_logo}>
        <a href="#">PROTOTYPE</a>
      </div>
      <ul className={styles.navBar_nav}>
        <li>
          <Link to="/" className={styles.navBar_link}><div className={styles.icon}>{HomeIcon}</div> Home</Link>
        </li>
        <li>
          <Link to="/search" className={styles.navBar_link}><div className={styles.icon}>{SearchIcon}</div> Search</Link>
        </li>
        <li>
          <Link to="/messenger" className={styles.navBar_link}><div className={styles.icon}>{MessengerIcon}</div> Messenger</Link>
        </li>
        <li>
          <Link to="post" className={styles.navBar_link}><div className={styles.icon}>{PostIcon}</div> Post</Link>
        </li>
        <li>
          <Link to="Profile" className={styles.navBar_link}><div className={styles.icon}><Avatar userPhoto={userData?.authAvator}/></div> {userData?.displayName}</Link>
        </li>
      </ul>
      <div className={styles.navBar_more}>
        <a href="#"><div>{MoreIcon}</div> More</a>
      </div>
    </div>
  )
}

export default NavBar