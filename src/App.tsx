import Header from "./components/Header"
import styles from './App.module.css'
import MyCabinet from './components/myCabinet/MyCabinet'
import SearchCountry from "./components/SearchCountry";

function App() {
  return (
<>


    <div className="wrapper">
      <Header />
      <SearchCountry />
      <MyCabinet/>
    </div>
    </>
  )
}

export default App;
