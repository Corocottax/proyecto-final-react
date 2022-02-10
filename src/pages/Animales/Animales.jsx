import React from "react";
import "./Animales.scss";
import CustomPopup from "../../shared/PopUp/PopUp";
import { useState, useEffect } from "react";
import axios from "axios";
import Buscador from "../../shared/Buscador/Buscador";
import { generatePath, Link } from "react-router-dom";
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

          <div className="popup-filter--ciudad">
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
              <button class="button">
                <img
                  src="https://res.cloudinary.com/dbamkolrf/image/upload/v1644482297/iconos%20protectora/perrop_ewpdvd.png"
                  alt="logo perro"
                />
                <p className="text">Perro</p>
              </button>
              <button class="button">
                <img
                  src="https://res.cloudinary.com/dbamkolrf/image/upload/v1644482297/iconos%20protectora/cat_cxspoi.png"
                  alt="logo Gato"
                />
                <p className="text">Gato</p>
              </button>
              <button class="button">
                <img
                  src="https://res.cloudinary.com/dbamkolrf/image/upload/v1644482299/iconos%20protectora/group12_e2ogox.png"
                  alt="logo Conejo"
                />
                <p className="text">Conejo</p>
              </button>
              <button class="button">
                <img
                  src="https://res.cloudinary.com/dbamkolrf/image/upload/v1644482297/iconos%20protectora/067Hamster_jj8jq1.png"
                  alt="logo Cobaya"
                />
                <p className="text">Cobaya</p>
              </button>
              <button class="button">
                <img
                  src="https://res.cloudinary.com/dbamkolrf/image/upload/v1644482297/iconos%20protectora/035CoatiCopy_dyhwh5.png"
                  alt="logo Pequeño mamífero"
                />
                <p className="text">Pequeño mamífero</p>
              </button>
              <button class="button">
                <img
                  src="https://res.cloudinary.com/dbamkolrf/image/upload/v1644482298/iconos%20protectora/group6_dxwxx6.png"
                  alt="logo Hurón"
                />
                <p className="text">Hurón</p>
              </button>
              <button class="button">
                <img
                  src="https://res.cloudinary.com/dbamkolrf/image/upload/v1644482297/iconos%20protectora/057Fish2_rcvzga.png"
                  alt="logo Pez"
                />
                <p className="text">Pez</p>
              </button>
              <button class="button">
                <img
                  src="https://res.cloudinary.com/dbamkolrf/image/upload/v1644482299/iconos%20protectora/group8_xn6wnm.png"
                  alt="logo Reptil"
                />
                <p className="text">Reptil</p>
              </button>
              <button class="button">
                <img
                  src="https://res.cloudinary.com/dbamkolrf/image/upload/v1644482298/iconos%20protectora/anfibio_auuz2o.png"
                  alt="logo Anfibio"
                />
                <p className="text">Anfibio</p>
              </button>
              <button class="button">
                <img
                  src="https://res.cloudinary.com/dbamkolrf/image/upload/v1644482297/iconos%20protectora/perrop_ewpdvd.png"
                  alt="logo Arácnido o insecto"
                />
                <p className="text">Arácnido o insecto</p>
              </button>
              <button class="button">
                <img
                  src="https://res.cloudinary.com/dbamkolrf/image/upload/v1644482297/iconos%20protectora/ave_zyp0z5.png"
                  alt="logo Ave"
                />
                <p className="text">Ave</p>
              </button>
            </div>
          </div>

          <div className="popup-filter--edad">
            <h3>Edad</h3>

            <select name="select">
              <option value="Joven" selected>
                Joven
              </option>
              <option value="Mayor">Mayor</option>
            </select>
          </div>

          <div className="popup-filter--sexo">
            <h3>Sexo</h3>
            <div className="popup-filter--sex">
            <button class="button">
                <img
                  src="https://res.cloudinary.com/dbamkolrf/image/upload/v1644482298/iconos%20protectora/female_leu70o.png"
                  alt="Hembra"
                />
                <p>Hembra</p>
              </button>
              <button class="button">
                <img
                  src="https://res.cloudinary.com/dbamkolrf/image/upload/v1644482299/iconos%20protectora/male_eloz8z.png"
                  alt="macho"
                />
                <p>Macho</p>
              </button>
            </div>
          </div>

          <div className="popup-filter--tamaño">
            <h3>Tamaño</h3>
            <div className="popup-filter--sizes">
            <button class="button">
                <img
                  src="https://res.cloudinary.com/dbamkolrf/image/upload/v1644482299/iconos%20protectora/groupCopy_rrbgfu.png"
                  alt="pequeño"
                />
                <p>Pequeño</p>
              </button>
              <button class="button">
                <img
                  src="https://res.cloudinary.com/dbamkolrf/image/upload/v1644482299/iconos%20protectora/groupCopy_rrbgfu.png"
                  alt="mediano"
                />
                <p>Mediano</p>
              </button>
              <button class="button">
                <img
                  src="https://res.cloudinary.com/dbamkolrf/image/upload/v1644482299/iconos%20protectora/groupCopy2_sseggh.png"
                  alt="grande"
                />
                <p>Grande</p>
              </button>
            </div>
          </div>
        </div>
      </CustomPopup>

      <div className="album">
        {mascotas &&
          mascotas.map((mascota, index) => {
            return (
              <Fade className="carta" key={index} delay={200} triggerOnce>
              <Link className="Link" to={generatePath("/adopciones/:id", { id: mascota._id })}>
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
                </Link>
              </Fade>
            );
          })}
      </div>
    </div>
  );
};

export default Animales;
