import styles from "./Login.module.scss"
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth" 
// import { GoogleLogin } from 'react-google-login';
import { signInWithPopup } from "firebase/auth";
import { googleProvider } from "../../firebase-config";
import { auth } from "../../firebase-config"
import { useEffect, useState } from "react";

interface I_userData {
  displayName: string,
  email: string,
}

function Login() {
  const [userData, setUserData] = useState<I_userData>()

  if(userData) location.replace("/Instagram/index.html")

  const handleGoogleLogin = (event:React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    signInWithPopup(auth, googleProvider).then((result)=>{
      const displayName = result.user.displayName;
      const email = result.user.email;
      if(displayName === null || email === null ) return ;
      const googleLoginData = {displayName,email};
      localStorage.setItem('googleLoginData',JSON.stringify(googleLoginData) );
    })
  }

  useEffect(()=> {
    const storedGoogleLoginData = localStorage.getItem('googleLoginData');
    if(storedGoogleLoginData !== null){
      const googleLoginData = JSON.parse(storedGoogleLoginData)
      setUserData(googleLoginData);
      console.log("成功")
    }
  },[userData])

  return (
    <div className={styles.LoginWrapper}>
      <div className={styles.Login}>
        <div className={styles.Login_logo}>PROTOTYPE</div>
        <form action="">
          <div className={styles.Login_inputText}><input type="text" placeholder="Email" /></div>
          <div className={styles.Login_inputText}><input type="password" placeholder="Password"/></div>
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