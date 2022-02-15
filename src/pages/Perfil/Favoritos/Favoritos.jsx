import React, { useEffect, useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'
import Buscador from '../../../shared/Buscador/Buscador'
import { API } from '../../../shared/Services/Api'
import "./favorites.scss"

export const getUserById2 = async (id) => {

    return await API.get(`api/users/${id}`)
  
  }
  
  const Favoritos = ({setNavbar}) => {
    const [visibility, setVisibility] = useState(false);
    
      const [user, setUser] = useState();
    
      useEffect(() => {
        const user1 = localStorage.getItem("user");
        const userParsed = JSON.parse(user1);
        const id = userParsed._id;
  
        if (id)
          getUserById2(id).then((data) => {
            setUser(data.data);
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
  
      {(user && user.favorites) && user.favorites.map((mascota, index) => (
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

export default Favoritos;