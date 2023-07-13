
import Header from "./components/Header"
import styles from './App.module.css'
import SearchCountry from "./components/SearchCountry";
import Footer from "./components/footer/Footer";
//
function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background}></div>
      <Header />
      <SearchCountry />
      <Footer/>
    </div>
  );
}

export default App;
