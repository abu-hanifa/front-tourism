import styles from "./App.module.css";
import Header from "./components/Header";

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background}></div>
      <Header />
    </div>
  );
}

export default App;
