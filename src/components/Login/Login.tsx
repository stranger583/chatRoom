import styles from "./Login.module.scss"
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth" 
// import { GoogleLogin } from 'react-google-login';
import { signInWithPopup } from "firebase/auth";
import { googleProvider } from "../../firebase-config";
import { auth } from "../../firebase-config"

function Login() {
  

  const handleGoogleLogin = (event:React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    signInWithPopup(auth, googleProvider).then((result)=>{
      console.log(result)
    })
  }

  return (
    <>
      <div className={styles.Login}>
        <div className={styles.Login_logo}>PROTOTYPE</div>
        <form action="">
          <div className={styles.Login_inputText}><input type="text" /></div>
          <div className={styles.Login_inputText}><input type="text" /></div>
          <div><button>Login</button></div>
          <div><span>或</span></div>
          <div><button onClick={handleGoogleLogin}>GoogleLogin</button></div>
        </form>
        <a href="">忘記密碼</a>
      </div>
      <div className={styles.signUp}><div><p>沒有帳號嗎 ? <a>註冊</a></p></div></div>
    </>
  )
}

export default Login