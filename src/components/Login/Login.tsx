import styles from "./Login.module.scss"
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth" 
// import { GoogleLogin } from 'react-google-login';
import { useEffect, useState } from "react";

import { signInWithPopup } from "firebase/auth";
import { googleProvider,auth,db } from "../../firebase-config";
import { doc, addDoc, serverTimestamp,setDoc } from "firebase/firestore";


import { changeLoginData } from "./ChangeLoginData"


interface I_userData {
  displayName: string,
  email: string,
  accessToken:string,
  uid: string,
  authAvator:string,
}

function Login() {
  const [userData, setUserData] = useState<I_userData>()

  if (userData?.displayName) location.replace("/Instagram/index.html")

  const handleGoogleLogin = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const response = await signInWithPopup(auth, googleProvider)
    const loginData = await response.user
    const accessToken = loginData.accessToken;
    const uid = loginData.uid;
    const authAvator = loginData.photoURL
    const displayName = loginData.displayName;
    const email = loginData.email;
    if (
          accessToken === null 
        || uid === null 
        || displayName === null 
        || email === null 
        || authAvator === null
      ) return;
    const googleLoginData = { displayName, email, accessToken, uid, authAvator,createdAt:serverTimestamp() };
    await setDoc(doc(db,"users",uid ),googleLoginData,{merge:true});
    localStorage.setItem("googleLoginData",uid)
    await changeLoginData(setUserData)

  }

  useEffect(() => {
    changeLoginData(setUserData)
  }, [userData?.displayName])

  return (
    <div className={styles.LoginWrapper}>
      <div className={styles.Login}>
        <div className={styles.Login_logo}>PROTOTYPE</div>
        <form action="">
          <div className={styles.Login_inputText}><input type="text" placeholder="Email" /></div>
          <div className={styles.Login_inputText}><input type="password" placeholder="Password" /></div>
          <div><button>Login</button></div>
          <div className={styles.Login_or}><span>或</span></div>
          <div><button onClick={handleGoogleLogin}>GoogleLogin</button></div>
        </form>
        <a href="" className={styles.Login_forgetPassword}>忘記密碼</a>
      </div>
      <div className={styles.signUp}><div><p>沒有帳號嗎 ? <a>註冊</a></p></div></div>
    </div>
  )
}

export default Login