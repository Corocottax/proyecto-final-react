import React from 'react';
import { useState, useEffect } from "react";
import "./EstadoAdopcion.scss"
import { Link } from 'react-router-dom';
import Buscador from '../../shared/Buscador/Buscador.jsx'
import { API } from '../../shared/Services/Api';
import { Fade } from 'react-awesome-reveal';


export const getUserById2 = async (id) => {

  return await API.get(`api/users/${id}`)

}

const EstadoAdopcion = ({setNavbar}) => {
  setNavbar(false);
  const [visibility, setVisibility] = useState(false);
  
    const [user, setUser] = useState();
  
    useEffect(() => {
      const user1 = localStorage.getItem("user");
      const userParsed = JSON.parse(user1);
      const id = userParsed._id;

      if (id)
        getUserById2(id).then((data) => {
          setUser(data.data);
          console.log(data);
        });
    }, []);

  return (<div>
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

    {(user && user.mascotas) && user.mascotas.map((mascota, index) => (
      <Fade className="carta" key={index} delay={200} triggerOnce>
                <div>
                  <img
                    className="imagen-carta2"
                    src={mascota.foto}
                    alt={mascota.nombre}
                  />
                  <div className="carta-detail">
                    <h2 className="nombre-carta">{mascota.nombre}</h2>
                    <p className="localidad-carta">{mascota.localizacion}</p>
                  </div>
                </div>
              </Fade>
      ))}
  </div>)
}
export default EstadoAdopcion;
