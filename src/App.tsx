
import styles from "./App.module.scss";
import NavBar from "./components/NavBar/NavBar";
import Chat from "./components/Chat/Chat";

function App() {

  return (

        <div className={styles.app}>
          <NavBar />
          <div className={styles.app_context}>
            <Chat />
          </div>
        </div>
  )
}

export default App
