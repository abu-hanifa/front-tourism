import Header from "./components/Header"
import styles from './App.module.css'
import MyCabinet from './components/myCabinet/MyCabinet'
import Card from "./components/Cards/Card"


function App() {
  return (
<>
<MyCabinet/>



    <div className="wrapper">
    <Card/>
      <Header />
      <SearchCountry />
    </div>
    </>
  )
}

export default App;
