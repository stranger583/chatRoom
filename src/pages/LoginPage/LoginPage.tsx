import ReactDOM from 'react-dom/client'
// import App from "../App"
import { BrowserRouter } from 'react-router-dom'
import styles from "./LoginPage.module.scss"
import Login from '../../components/Login/Login'
import Chat from "../../components/Chat/Chat";
import { Routes, Route } from "react-router-dom";

function LoginPage() {

  return (
        <div className={styles.LoginPage}>
          <div className={styles.LoginPage}>
            <Routes>             
                    <Route path='/profile' element={<div>Profile</div>} />
                    <Route path='/register' element={<Chat />} />
                    <Route path='*' element={<div>Login</div>} />
                    {/* <Route path='*' element={<Login />} /> */}
            </Routes>
          </div>
        </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <LoginPage />
    </BrowserRouter>
)


export default LoginPage