
import styles from "./App.module.scss";
import NavBar from "./components/NavBar/NavBar";
import Chat from "./components/Chat/Chat";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {

  return (

        <div className={styles.app}>
          <NavBar />
          <Chat />
        </div>
  )
}

export default App
