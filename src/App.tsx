
import Header from "./components/Header"
import styles from './App.module.css'
import SearchCountry from "./components/SearchCountry";
//
function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background}></div>
      <Header />
      <SearchCountry />
      test
    </div>
  );
}

export default App;
