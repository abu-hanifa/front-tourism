import style from "./SearchCountry.module.css";
import arrow from "../../icons/arrow.png";
import button from "../../images/button.png";
import lupa from "../../icons/lupa.png";
//
function SearchCountry() {
  return (
    <div className={style.search}>
      <span>Где бы вы хотели отдохнуть?</span>
    

  <div className={style.input_center}>
  <div className={style.input_flex}>
        <div className='input-group mb-3' >
          <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">Button</button>
          </div>
        </div>
      </div>
  </div>


    
    </div>
  );
}

export default SearchCountry;
