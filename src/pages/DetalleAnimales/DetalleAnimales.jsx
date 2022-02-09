import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailDiv from "./Components/DetailDiv";
import DetailInfo from "./Components/DetailInfo";
import "./DetalleAnimales.scss";

export const getAnimalById = (name) => {


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
  console.log("animal", animal.personalidad);
  console.log(showDetail);

  useEffect(() => {
    if (id)
      getAnimalById(id).then((data) => {
        setAnimal(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="detail">
      <figure className="detail-figure">
        <img className="detail-figure__img" src={animal.foto} alt={animal.nombre} />
        <figcaption className="detail-figure__name">{animal.nombre}</figcaption>
      </figure>
      <button className="btn-1" onClick={() => setShowDetail("datos")}>Datos</button>
      <button className="btn-1" onClick={() => setShowDetail("salud")}>Salud</button>
      <button className="btn-1" onClick={() => setShowDetail("adopcion")}>Adopción</button>
      <div className="detail-info">
      {showDetail==="datos" ? <div><DetailDiv detail={animal} /></div> : (showDetail==="salud" ? <div>Salud</div> : <div>Adopción</div>) }
        
      </div>
      <div className="detail-personality">
        <h4 className="detail-personality__title">Personalidad</h4>
        <div className="divloco">
        {animal.personalidad && animal.personalidad.map((personalidad) => (
          <div className="detail-personality__div" key={personalidad}>
            <p className="detail-personality__div--p">{personalidad}</p>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default DetalleAnimales;
