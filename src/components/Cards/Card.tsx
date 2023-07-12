import React, { useEffect,useState } from "react";
import { useDispatch} from "react-redux";
import { addCards, fetchCards } from "../features/cards.slice";
import { AppDispatch } from "../App/app.store";

function Card() {
  const [header, setHeader] = useState("");
  const [geoTag, setGeoTag] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");

  const dispatch = useDispatch<AppDispatch>()
  

  const handleSetHeader = (e) => {
    setHeader(e.target.value);
  };
  const handleSetGeoTag = (e) => {
    setGeoTag(e.target.value);
  };
  const handleSetImage = (e) => {
    setImage(e.target.files[0]);
  };
  const handleSetDesc = (e) => {
    setDesc(e.target.value);
  };

  const handleSendForm=(e)=>{
    e.preventDefault()
    dispatch(
        addCards({
            header,
            geoTag,
            image,
            desc
        })
    )
   
    
  }

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  

  return (
    <div>
      <form onSubmit={handleSendForm}>
        <input type="text" value={header} onChange={handleSetHeader} />
        <input type="text" value={geoTag} onChange={handleSetGeoTag} />
        <input type="file" value={image} onChange={handleSetImage} />
        <input type="text" value={desc} onChange={handleSetDesc} />
      </form>
    </div>
  );
}

export default Card;
