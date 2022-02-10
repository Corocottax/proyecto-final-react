import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { JwtContext } from '../../shared/Contexts/JwtContext';
import "./Opciones.scss"

const Opciones = ({setNavbar}) => {

  setNavbar(true);

  const {jwt, setJwt} = useContext(JwtContext);
  let navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const signOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setJwt(null);
    navigate("/");
}

  return (<div>

<div className="div-general">
    <div className="tarjetitas2">
      <div className="primeras">
        <div className="info">
          <div className="float">
            <img className="imagen-tarjetita" src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644487488/proyecto%20final/protectora_3x_pfw3wm.png" alt="imagen perfil" />
            <h3 className="titulo-tarjetita">Asociaciones protectoras</h3>
          </div>
          <img className="flechita-tarjetita" src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644481551/proyecto%20final/arrow_3x_pnjvjg.png" alt="flechita" />
        </div>
        <div className="info">
          <div className="float">
            <img className="imagen-tarjetita" src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644487488/proyecto%20final/eventos_3x_phh4o8.png" alt="imagen perfil" />
            <h3 className="titulo-tarjetita">Eventos</h3>
          </div>
          <img className="flechita-tarjetita" src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644481551/proyecto%20final/arrow_3x_pnjvjg.png" alt="flechita" />
        </div>
        <div className="info">
          <div className="float">
            <img className="imagen-tarjetita" src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644487487/proyecto%20final/blogCopy_3x_sc7a92.png" alt="imagen perfil" />
            <h3 className="titulo-tarjetita">Curiosidades</h3>
          </div>
          <img className="flechita-tarjetita" src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644481551/proyecto%20final/arrow_3x_pnjvjg.png" alt="flechita" />
        </div>
        <div className="info">
          <div className="float">
            <img className="imagen-tarjetita" src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644487487/proyecto%20final/ayuda_3x_keqfep.png" alt="imagen perfil" />
            <h3 className="titulo-tarjetita">Ayuda</h3>
          </div>
          <img className="flechita-tarjetita" src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644481551/proyecto%20final/arrow_3x_pnjvjg.png" alt="flechita" />
        </div>
        <div className="info">
          <div className="float">
            <img className="imagen-tarjetita" src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644487489/proyecto%20final/confi_3x_enzkx9.png" alt="imagen perfil" />
            <h3 className="titulo-tarjetita">Configuración</h3>
          </div>
          <img className="flechita-tarjetita" src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644481551/proyecto%20final/arrow_3x_pnjvjg.png" alt="flechita" />
        </div>
      </div>
      <div className="segundas">
        <div className="info"  onClick={signOut}>
          <div className="float">
              <img className="imagen-tarjetita" src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644487488/proyecto%20final/salir_3x_wozbwk.png" alt="imagen perfil" />
              <h3 className="titulo-tarjetita">Cerrar sesión</h3>
          </div>
        </div>
      </div>
    </div>
  </div>

  </div>);
};

export default Opciones;
