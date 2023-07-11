import styles from "./App.module.css";
import Header from "./components/Header";
import SearchCountry from "./components/SearchCountry";

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background}></div>
      <Header />
      <SearchCountry />
    </div>
  );
}

export default App;
