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



const DetalleAnimales = ({setNavbar}) => {
  const [visibility, setVisibility] = useState(false);

  setNavbar(false);


  const popupCloseHandler = () => {
    setVisibility();
  };
  const [showDetail, setShowDetail] = useState("datos");

  const [animal, setAnimal] = useState([]);
  let { id } = useParams("name");

  const animalLocalStorage = (animal) => {

    localStorage.setItem("animal", JSON.stringify(animal))
  
  } 

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
      <div className="div-compartir-principal">
        <div className="div-compartir">
          <div className="sexonombreyciudad">
            <div className="sexoynombre">
              {animal.sexo === "macho" ? (
                <img className="sexo" src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644509182/proyecto%20final/male_3x_kcyhge.png" alt="logo macho"/>) : (<img className="sexo" src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644509182/proyecto%20final/female_3x_x10zv1.png" alt="logo hembra"/>)}
              <p className="nombreAnimal">{animal.nombre}</p>
            </div>
            <p className="localizacionAnimal">{animal.localizacion}</p>
          </div>
          <div className="compartir">
            <img className="img-compartir-corazon" src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644509359/proyecto%20final/favoritos_3x_cfuezi.png" alt="logo corazon"/>
            <img className="img-compartir-compartir" src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644507412/proyecto%20final/compartir_3x_ue2hxv.png" alt="logo compartir"/>
          </div>
        </div>
      </div>
      <div className="detail-btn-div">
        <button className="detail-btn" onClick={() => setShowDetail("datos")} autoFocus>Datos</button>
        <button className="detail-btn" onClick={() => setShowDetail("salud")}>Salud</button>
        <button className="detail-btn" onClick={() => setShowDetail("adopcion")}> Adopción</button>
      </div>
      <div className="detail-info-superior">
        <div className="detail-info">
          {showDetail === "datos" ? (<div><DetailData animal={animal} /></div>) : showDetail === "salud" ? (<DetailHealth animal={animal} />) : (<DetailAdoption animal={animal} />)}
        </div>
      </div>
      <div className="detail-adopt">
        <button className="detail-adopt__btn" onClick={() => setVisibility(!visibility)}>Adoptar</button>
      </div>
      
      <CustomPopup onClose={popupCloseHandler} show={visibility}>
        <div className="popupazul">
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
          <h4>¿Quieres continuar con el proceso de adopción?</h4>
          <div className="btn-pop-container">
          <div className="contain1">
          <button className="btn-pop1" onClick={popupCloseHandler}>Cancelar</button>
          </div>
          <div className="contain2">
          <Link className="btn-pop" to="/formularioAdopcion" onClick={() => animalLocalStorage(animal)}>Continuar</Link>
          </div>
          </div>
          </div>
        </div>
      </CustomPopup>
      
    </div>

  );
};

export default DetalleAnimales;
