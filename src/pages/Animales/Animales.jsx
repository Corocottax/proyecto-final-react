import React from "react";
import "./Animales.scss";
import CustomPopup from "../../shared/PopUp/PopUp";
import { useState, useEffect } from "react";
import axios from "axios";

const Animales = ({setNavbar}) => {
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
        
      {/* -----------------------BOTON Y POPUP PARA EL FILTRO-------------------------- */}
      <button onClick={(e) => setVisibility(!visibility)}>Filtrar</button>
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
