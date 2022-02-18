import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import CustomPopup from "../../shared/PopUp/PopUp";
import DetailAdoption from "./Components/DetailAdoption";
import DetailData from "./Components/DetailData";
import DetailHealth from "./Components/DetailHealth";
import "./DetalleAnimales.scss";
import { API } from "../../shared/Services/Api";

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

export const getUserById = async (id) => {

  return await API.get(`api/users/${id}`)

}

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

  const [arrayMascotasOficial, setArrayMascotasOficial] = useState([]);
  const user = localStorage.getItem("user");
  const userParsed = JSON.parse(user);

  const agregarFavoritoAUsuario = () => {

    const animalParsed = animal;
    const arrayMascotas = [];

    getUserById(userParsed._id).then((usuario) => { 
      
      console.log(usuario.data);
      usuario.data.favorites.map((mascota) => {
    
        return arrayMascotas.push(mascota)
    
      })
      arrayMascotas.push(animalParsed._id)
      setArrayMascotasOficial(arrayMascotas)
    
    })

    if (arrayMascotasOficial.length > 0) {

      fetch(`https://proyecto-final-api-mocha.vercel.app/api/users/${userParsed._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          favorites: arrayMascotasOficial,
        }),
        }).then((response) => {
          console.log(response.status);
          return response.json();
        })
        .then((data) => console.log(data));

    }

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
            <img onClick={agregarFavoritoAUsuario} className="img-compartir-corazon" src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644509359/proyecto%20final/favoritos_3x_cfuezi.png" alt="logo corazon"/>
            <img className="img-compartir-compartir" src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644507412/proyecto%20final/compartir_3x_ue2hxv.png" alt="logo compartir"/>
          </div>
        </div>
      </div>
      <div className="detail-btn-div">
      <button className={showDetail==="datos" ? "detail-btn__bonito" : "detail-btn__default"} onClick={() => setShowDetail("datos")}>Datos</button>
        <button className={showDetail==="salud" ? "detail-btn__bonito" : "detail-btn__default"} onClick={() => setShowDetail("salud")}>Salud</button>
        <button className={showDetail==="adopcion" ? "detail-btn__bonito" : "detail-btn__default"} onClick={() => setShowDetail("adopcion")}> Adopción</button>
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
