import styles from "./Login.module.scss"
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth" 
// import { GoogleLogin } from 'react-google-login';
import { signInWithPopup } from "firebase/auth";
import { googleProvider } from "../../firebase-config";
import { auth } from "../../firebase-config"

function Login() {
  signInWithPopup(auth, googleProvider).then((result)=>{
    console.log(result)
  })

// const GoogleLoginButton = () => {
//   // 處理登入成功後的回調函數
//   const handleLoginSuccess = (response:any) => {
//     console.log('登入成功', response);
//   };

//   // 處理登入失敗後的回調函數
//   const handleLoginFailure = (error:any) => {
//     console.log('登入失敗', error);
//   };

//   return (
//     <GoogleLogin
//       clientId="YOUR_CLIENT_ID"
//       buttonText="使用 Google 登入"
//       onSuccess={handleLoginSuccess}
//       onFailure={handleLoginFailure}
//       cookiePolicy={'single_host_origin'}
//     />
//   );
// };

  return (
    <>
      <div className={styles.Login}>
        <div className={styles.Login_logo}>PROTOTYPE</div>
        <form action="">
          <div className={styles.Login_inputText}><input type="text" /></div>
          <div className={styles.Login_inputText}><input type="text" /></div>
          <div><button>Login</button></div>
          <div><span>或</span></div>
          {/* <GoogleLoginButton/> */}
        </form>
        <a href="">忘記密碼</a>
      </div>
      <div className={styles.signUp}><div><p>沒有帳號嗎?</p><span>註冊</span></div></div>
    </>
  )
}

export default Login