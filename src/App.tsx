import Header from "./components/Header";
import styles from "./App.module.css";
import SearchCountry from "./components/SearchCountry";
import Card from "./components/Cards/Card";
import Cards from "./components/Cards/Cards";

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background}></div>
      {/* <Card/> */}
      <Cards/>
      
      {/* <Header />
      <SearchCountry /> */}
    </div>

    
  );
}

export default App;
