import React from "react";
import "./Animales.scss";
import CustomPopup from "../../shared/PopUp/PopUp";
import { useState, useEffect } from "react";
import axios from "axios";
import Buscador from "../../shared/Buscador/Buscador";
import { Link } from "react-router-dom";

const Animales = ({setNavbar}) => {
  // AXIOS
  const UrlAnimales ="https://proyecto-final-api-mocha.vercel.app/api/mascotas";

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

        <Link to="/home" className='volver'>
          <img className="imgHeader" src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644422043/proyecto%20final/atras_3x_druibb.png" alt="flechita" />
        </Link>
        
        <Buscador/>

        {/* -----------------------BOTON Y POPUP PARA EL FILTRO-------------------------- */}
        <img  onClick={(e) => setVisibility(!visibility)} className="imgfiltros" src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644422043/proyecto%20final/filtros_3x_etqcy3.png" alt="filtrado" />

      </div>

        <CustomPopup
          className="filters-popup"
          onClose={popupCloseHandler}
          show={visibility}
        >
          <div className="ASDF">
            <h1>hola</h1>
          </div>
        </CustomPopup>

    </div>
  );
};

export default Animales;
