import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCard, fetchCards } from "../features/cards.slice";
import Styles from "./Cards.module.css";
import Placemark from '../icons/Placemark.jsx'

function Cards() {
  const cards = useSelector((state) => state.cards.cards);
  console.log(cards);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  return (
    <div className={Styles.main_block}>
      {cards.map((item) => {
        return (
          <div className={Styles.cardMapDiv}>
            <div className={Styles.cardImg}>
            <img src={`http://localhost:4000/${item.image[0]}`} alt="" />
            </div>
            <div className={Styles.textBlock}>
            <h3>{item.header}</h3> 
            <h4>{<Placemark/>}{item.geoTag}</h4> 
            <h3>{item.desc}</h3>  
            <button>{item.price}</button>
            
            
            </div>  
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
