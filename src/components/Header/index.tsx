import style from "./Header.module.css";
import logo from "../../images/logo.png";
import user from "../../icons/user.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../App/app.store";


function Header() {

const tok = useSelector((state: RootState) => state.application.token)

  function handleExit () {
    localStorage.removeItem('token')
    location.reload()
  }
  return (
    <header>
      
      


      <div className={style.nav_bar}>
        <ul>
          <li>
            <a href="/">Publics</a>
          </li>
          <li>
            <a href="/">Текст 2</a>
          </li>

          <li>
            <img src={logo} alt="логотип" />
          </li>

          <li>
            <a href="/">Текст 3</a>
          </li>
        </ul>
      </div>
      <div className={style.profile}>
        <img src={user} alt="профиль" />
        {tok ?  <button type="submit" onClick={handleExit} className={style.butt}>Выйти</button> :  <Link className={style.link} to='/email'>Войти</Link> }
       
        
       
     
        
      </div>
    </header>
  );
}

export default Header;
