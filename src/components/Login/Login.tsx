import styles from "./Login.module.scss"
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth" 
// import { GoogleLogin } from 'react-google-login';
import { signInWithPopup } from "firebase/auth";
import { googleProvider } from "../../firebase-config";
import { auth } from "../../firebase-config"
import { useEffect, useState } from "react";
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

  const handleGoogleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const accessToken = result.user.accessToken!;
        const uid = result.user.uid;
        const authAvator = result.user.photoURL
        const displayName = result.user.displayName;
        const email = result.user.email;
        if (
            accessToken === null 
            || uid === null 
            || displayName === null 
            || email === null 
            || authAvator === null
          ) return;
        const googleLoginData = { displayName, email, accessToken, uid, authAvator };
        localStorage.setItem('googleLoginData', JSON.stringify(googleLoginData));
        changeLoginData(setUserData)
      })
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