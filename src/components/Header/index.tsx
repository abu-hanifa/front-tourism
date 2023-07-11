import "./Header.module.css";
import style from "./Header.module.css";
import logo from "../../images/logo.png";
import user from "../../icons/user.png";

function Header() {
  return (
    <header>
      <div className={style.nav_bar}>
        <ul>
          <li>
            <a href="/">Текст 1</a>
          </li>
          <li>
            <a href="/">Текст 2</a>
          </li>
        </ul>
        <div className="logo-block">
          <img src={logo} alt="логотип" />
        </div>
        <ul>
          <li>
            <a href="/">Текст 3</a>
          </li>
          <li>
            <a href="/">Текст 4</a>
          </li>
        </ul>
      </div>
      <div className={style.profile}>
        <img src={user} alt="профиль" />
        <span>User_name</span>
      </div>
    </header>
  );
}

export default Header;
