import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailData from "./Components/DetailData";
import DetailHealth from "./Components/DetailHealth";
import "./DetalleAnimales.scss";

export const getAnimalById = (name, {setNavbar}) => {

  setNavbar(true);

  return fetch(
    `https://proyecto-final-api-mocha.vercel.app/api/mascotas/${name}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return [];
    }
  });
};

const DetalleAnimales = () => {
  const [showDetail, setShowDetail]= useState("datos")
  
  const [animal, setAnimal] = useState([]);
  let { id } = useParams("name");

  useEffect(() => {
    if (id)
      getAnimalById(id).then((data) => {
        setAnimal(data);
      });
  }, []);

  return (
    <div className="detail">
      <figure className="detail-figure">
        <img className="detail-figure__img" src={animal.foto} alt={animal.nombre} />
        <figcaption className="detail-figure__name">{animal.nombre}</figcaption>
      </figure>
      <div className="detail-btn">
    
      <button className="detail-btn__1" onClick={() => setShowDetail("datos")} autoFocus>Datos</button>
      <button className="detail-btn__2" onClick={() => setShowDetail("salud")}>Salud</button>
      <button className="detail-btn__3" onClick={() => setShowDetail("adopcion")}>Adopción</button>
      </div>
      <div className="detail-info">
      {showDetail==="datos" ? <div><DetailData animal={animal} /></div> : (showDetail==="salud" ? <DetailHealth animal={animal}/> : <div>Adopción</div>) }
      </div>
      
    </div>
  );
};

export default DetalleAnimales;
