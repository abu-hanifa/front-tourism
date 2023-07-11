import "./Header.module.css";

function Header() {
  return (
    <header>
      <div className="nav-bar">
        <ul>
          <li>
            <a href="/">Текст 1</a>
          </li>
          <li>
            <a href="/">Текст 2</a>
          </li>
        </ul>
        <div className="logo-block">
          <img src="/images/logo.png" alt="логотип" />
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
      <div className="profile">
        <img src="/icons/user.png" alt="профиль" />
      </div>
    </header>
  );
}

export default Header;
