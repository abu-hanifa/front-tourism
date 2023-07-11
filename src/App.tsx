import Header from "./components/Header"
import styles from './App.module.css'
import MyCabinet from './components/myCabinet/MyCabinet'

function App() {
  return (
<>
<MyCabinet/>

    <div className="wrapper">
      <Header />
      <SearchCountry />
    </div>
    </>
  )
}

export default App;
