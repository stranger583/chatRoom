import * as ReactDOM from 'react-dom/client'
// import App from "../App"
import { BrowserRouter } from 'react-router-dom'
import styles from "./index.module.scss"
import Login from '../../components/Login/Login'
import Chat from "../../components/Chat/Chat";
import { Routes, Route } from "react-router-dom";


function LoginPage() {


  return (
        <div className={styles.LoginPage}>
          <div className={styles.LoginPage_container}>
            <Routes>             
                    <Route path='/profile' element={<div>Profile</div>} />
                    <Route path='/register' element={<Chat />} />
                    <Route path='*' element={<Login/>} />
                    {/* <Route path='*' element={<Login />} /> */}
            </Routes>
          </div>
        </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <BrowserRouter>
        <LoginPage />
    </BrowserRouter>
)


export default LoginPage