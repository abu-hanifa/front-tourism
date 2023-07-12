import style from "./Header.module.css";
import logo from "../../images/logo.png";
import user from "../../icons/user.png";

function Header() {
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
        <span>Log in</span>
      </div>
    </header>
  );
}

export default Header;
