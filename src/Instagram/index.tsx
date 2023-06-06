import * as ReactDOM from 'react-dom/client'
// import App from "../App"
import { BrowserRouter } from 'react-router-dom'

import styles from "./index.module.scss"
import NavBar from '../components/NavBar/NavBar';
import Chat from "../components/Chat/Chat";
import { Routes, Route } from "react-router-dom";

function Instagram() {

  return (
        <div className={styles.Instagram}>
          <NavBar />
          <div className={styles.Instagram_context}>
            <Routes>             
                    <Route index element={<div>Home</div>} />
                    <Route path='/search' element={<div>Search</div>} />
                    <Route path='/post' element={<div>Post</div>} />
                    <Route path='/profile' element={<div>Profile</div>} />
                    <Route path='/messenger' element={<Chat />} />
                    <Route path='*' element={<div>123</div>} />
            </Routes>
          </div>
        </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <BrowserRouter>
        <Instagram />
    </BrowserRouter>
)


export default Instagram