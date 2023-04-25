
import styles from "./App.module.scss";
import NavBar from "./components/NavBar/NavBar";
import Chat from "./components/Chat/Chat";
import { Routes, Route } from "react-router-dom";

function App() {

  return (

        <div className={styles.app}>
          <NavBar />
            <Routes>             
                    <Route index element={<div>Home</div>} />
                    <Route path='/search' element={<div>Search</div>} />
                    <Route path='/post' element={<div>Post</div>} />
                    <Route path='/profile' element={<div>Profile</div>} />
                    <Route path='/messenger' element={<Chat />} />
                    <Route path='*' element={<div>123</div>} />
            </Routes>
          <div className={styles.app_context}>
          </div>
        </div>
  )
}

export default App
