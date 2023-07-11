import style from "./SearchCountry.module.css";
import arrow from "../../icons/arrow.png";
import button from "../../images/button.png";
import lupa from "../../icons/lupa.png";
//
function SearchCountry() {
  return (
    <div className={style.search}>
      <span>Где бы вы хотели отдохнуть?</span>
      <div className={style.search_country}>
        <div className={style.a_country}>
          <span>Страна</span>
          <img src={arrow} alt="стрелка" />
        </div>
        <div className={style.city}>
          <span>Город/Область</span>
          <img className={style.icon} src={arrow} alt="стрелка" />
        </div>
        <div className={style.button}>
          <img width={35} src={button} alt="поиск" />
          <img className={style.button_icon} src={lupa} alt="лупа" />
        </div>
      </div>
    </div>
  );
}

export default SearchCountry;
