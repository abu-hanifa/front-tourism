import Header from "./components/Header";
import styles from "./App.module.css";
import SearchCountry from "./components/SearchCountry";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import SingUp from "./components/users/SingUp";
import SingIn from "./components/users/SingIn";
import { useSelector } from "react-redux";
import { RootState } from "./components/App/app.store";

//
function App() {

  function handleExit () {
    localStorage.removeItem('token')
  }

  const token = useSelector((state: RootState) => state.application.token)
  
  
  
  if(!token){

    return (
      <div className={styles.wrapper}>
        <div className={styles.background}></div>
        <Header />
        
   
        <Routes>
          <Route path="/register" element={<SingUp />} />
          <Route path="/email" element={<SingIn />} />
          <Route path="/" element={<SearchCountry />} />
        </Routes>
      </div>
    );
  }
  return(
    <div>
      <div className={styles.wrapper}>
      <form onSubmit={handleExit}>
        <button>выйти</button>
      </form>
      <div className={styles.background}></div>
      
      
      <Routes>
      <Route path="/register" element={<Navigate to='/email'/>}/>
      <Route path="/email" element={<Navigate to='/'/>}/>
      <Route path="/" element={<SearchCountry />} />
      </Routes>
    </div>
    </div>
  )
}

export default App;
