import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CustomPopup from "../../shared/PopUp/PopUp";
import DetailAdoption from "./Components/DetailAdoption";
import DetailData from "./Components/DetailData";
import DetailHealth from "./Components/DetailHealth";
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
  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = () => {
    setVisibility();
  };
  const [showDetail, setShowDetail] = useState("datos");

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
        <img className="detail-figure__img" src={animal.foto} alt={animal.nombre}/>
        <figcaption className="detail-figure__name">{animal.nombre}</figcaption>
      </figure>
      <div>
        {animal.sexo === "macho" ? (
          <img src="https://res.cloudinary.com/dbamkolrf/image/upload/v1644482299/iconos%20protectora/male_eloz8z.png" alt="logo macho"/>) : (<img src="https://res.cloudinary.com/dbamkolrf/image/upload/v1644482298/iconos%20protectora/female_leu70o.png" alt="logo macho"/>)}
        <p>{animal.nombre}</p>
        <p>{animal.localizacion}</p>
        <img src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644481703/proyecto%20final/favoritosCopy_3x_h6guea.png" alt="logo corazon"/>
      </div>
      <div className="detail-btn">
        <button className="detail-btn__1" onClick={() => setShowDetail("datos")} autoFocus>Datos</button>
        <button className="detail-btn__2" onClick={() => setShowDetail("salud")}>Salud</button>
        <button className="detail-btn__3" onClick={() => setShowDetail("adopcion")}> Adopción</button>
      </div>
      <div className="detail-info">
        {showDetail === "datos" ? (<div><DetailData animal={animal} /></div>) : showDetail === "salud" ? (<DetailHealth animal={animal} />) : (<DetailAdoption animal={animal} />)}
      </div>
      <div className="detail-adopt">
        <button className="detail-adopt__btn" onClick={() => setVisibility(!visibility)}>Adoptar</button>
      </div>
      <CustomPopup onClose={popupCloseHandler} show={visibility}>
        <div className="popupdetalle">
          <h3>Solicitud de adopción</h3>
          <p>
            Adoptar es un acto de amor, pero sobre todo una responsabilidad de
            por vida.
          </p>
          <p>
            Por éste motivo es importante que veas el siguiente video donde te
            explicamos como va a ser todo el proceso de adopción.
          </p>
          <img
            src="/images/slider/imagen1.png"
            alt="Foto persona acariciando perrito"
          />
          <button onClick={popupCloseHandler}>Cancelar</button>
          <Link to="/formularioAdopcion">Continuar</Link>
        </div>
      </CustomPopup>
    </div>
  );
};

export default DetalleAnimales;
