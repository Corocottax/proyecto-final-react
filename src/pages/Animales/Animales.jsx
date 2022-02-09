import React from "react";
import "./Animales.scss";
import CustomPopup from "../../shared/PopUp/PopUp";
import { useState, useEffect } from "react";
import axios from "axios";
import Buscador from "../../shared/Buscador/Buscador";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const Animales = ({ setNavbar }) => {
  // AXIOS
  const UrlAnimales =
    "https://proyecto-final-api-mocha.vercel.app/api/mascotas";

  const [mascotas, setMascotas] = useState([]);
  setNavbar(true);

  // ESTO ES PARA EL POPUP
  const [visibility, setVisibility] = useState(false);
  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

  useEffect(() => {
    axios(UrlAnimales).then((res) => {
      setMascotas(res.data);
    });
  }, []);

  console.log(mascotas);

  return (
    <div>
      <div className="header">
        <Link to="/home" className="volver">
          <img
            className="imgHeader"
            src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644422043/proyecto%20final/atras_3x_druibb.png"
            alt="flechita"
          />
        </Link>

        <Buscador />

        {/* -----------------------BOTON Y POPUP PARA EL FILTRO-------------------------- */}
        <img
          onClick={(e) => setVisibility(!visibility)}
          className="imgfiltros"
          src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644422043/proyecto%20final/filtros_3x_etqcy3.png"
          alt="filtrado"
        />
      </div>

      <CustomPopup
        className="filters-popup"
        onClose={popupCloseHandler}
        show={visibility}
      >
        <div className="popup-filter">
          <h2>Filtros</h2>

          <div className="popup-filter--city">
            <h3>Ciudad</h3>
            <select name="select">
              <option value="Elige tu zona" selected>
                Elige tu zona
              </option>
              <option value="Madrid">Madrid</option>
              <option value="Cataluña">Cataluña</option>
            </select>
          </div>

          <div className="popup-filter--especie">
            <h3>Especie</h3>
             <div className="popup-filter--especieButtons">
               <button class="button"> ASDF </button>
               <button class="button"> ASDF </button>
               <button class="button"> ASDF </button>
               <button class="button"> ASDF </button>
               <button class="button"> ASDF </button>
               <button class="button"> ASDF </button>
               <button class="button"> ASDF </button>
               <button class="button"> ASDF </button>
               <button class="button"> ASDF </button>
               <button class="button"> ASDF </button>
               <button class="button"> ASDF </button>
             </div>
            
          </div>

          <div></div>
        </div>
      </CustomPopup>

      <div className="album">
        {mascotas &&
          mascotas.map((mascota, index) => {
            return (
              <Fade className="carta" key={index} delay={200} triggerOnce>
                <div key={index}>
                  <img
                    className="imagen-carta"
                    src={mascota.foto}
                    alt={mascota.nombre}
                  />
                  <div className="carta-detail">
                    <h2 className="nombre-carta">{mascota.nombre}</h2>
                    <p className="localidad-carta">{mascota.localizacion}</p>
                  </div>
                </div>
              </Fade>
            );
          })}
      </div>
    </div>
  );
};

export default Animales;
