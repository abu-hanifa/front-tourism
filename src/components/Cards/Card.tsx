import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addCards, fetchCards } from "../features/cards.slice";
import { AppDispatch } from "../App/app.store";

function Card() {
  const [header, setHeader] = useState("");
  const [geoTag, setGeoTag] = useState("");
  const [image, setImage] = useState([]);
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  const handleSetHeader = (e) => {
    setHeader(e.target.value);
  };
  const handleSetGeoTag = (e) => {
    setGeoTag(e.target.value);
  };

  console.log(image);
  
  const handleSetImage = (e) => {
    
    setImage((e.target.files));
  };
  const handleSetDesc = (e) => {
    setDesc(e.target.value);
  };
  const handleSetPrice = (e)=>{
    setPrice(e.target.value)
  }

  const handleSendForm = (e) => {
    e.preventDefault();
    dispatch(
      addCards({
        header,
        geoTag,
        image,
        desc,
        price
      })
    )
  };

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  return (
    <div>
      <form onSubmit={handleSendForm} encType="multipart/form-data">
        <input
          placeholder="Место отдыха"
          type="text"
          value={header}
          onChange={handleSetHeader}
        />
        <input
          placeholder="Гео метка"
          type="text"
          value={geoTag}
          onChange={handleSetGeoTag}
        />
      <input type="file"multiple onChange={handleSetImage}  />
        <input
          placeholder="Описание места отдыха"
          type="text"
          value={desc}
          onChange={handleSetDesc}
        />
         <input
          placeholder="Стоимость услуги"
          type="text"
          value={price}
          onChange={handleSetPrice}
        />
        <button type="submit">Send </button>
      </form>
    </div>
  );
}

export default Card;
