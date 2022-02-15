import { Link } from "react-router-dom";
import "./Perfil.scss"

const Perfil = ({setNavbar}) => {

  setNavbar(true);

  const user = localStorage.getItem('user');
  const userParsed = JSON.parse(user)

  return (
  <div className="div-general">
    <div className="div-fotoPerfil">
      {userParsed.photo ? <img className="imagen-fotoPerfil" src={userParsed.photo} alt="foto de perfil"/> : <img className="imagen-fotoPerfil" src="https://i.pinimg.com/originals/00/79/69/0079696f55bf385608429af1870f235d.png" alt="foto de perfil"/>}
    </div>
    <div className="tarjetitas">
      <div className="primeras">
        <div className="info">
          <div className="float">
            <img className="imagen-tarjetita" src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644326694/proyecto%20final/chico_3x_zu7cdh.png" alt="imagen perfil" />
            <h3 className="titulo-tarjetita">Mi perfil</h3>
          </div>
          <img className="flechita-tarjetita" src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644481551/proyecto%20final/arrow_3x_pnjvjg.png" alt="flechita" />
        </div>
        <div className="info">
          <div className="float">
              <img className="imagen-tarjetita" src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644481637/proyecto%20final/localization_3x_yi3wwf.png" alt="imagen perfil" />
              <h3 className="titulo-tarjetita">Direcciones</h3>
            </div>
            <img className="flechita-tarjetita" src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644481551/proyecto%20final/arrow_3x_pnjvjg.png" alt="flechita" />
          </div>
        <Link  className="info" to="/favoritos">
          <div className="float">
            <img className="imagen-tarjetita" src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644481703/proyecto%20final/favoritosCopy_3x_h6guea.png" alt="imagen perfil" />
            <h3 className="titulo-tarjetita">Favoritos</h3>
          </div>
          <img className="flechita-tarjetita" src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644481551/proyecto%20final/arrow_3x_pnjvjg.png" alt="flechita" />
        </Link>        
        <div className="info">
          <div className="float">
              <img className="imagen-tarjetita" src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644481703/proyecto%20final/notificaciones_3x_mz440b.png" alt="imagen perfil" />
              <h3 className="titulo-tarjetita">Notificaciones</h3>
            </div>
            <img className="flechita-tarjetita" src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644481551/proyecto%20final/arrow_3x_pnjvjg.png" alt="flechita" />
          </div>
      </div>
      <div className="segundas">
      <Link  className="info" to="/estados">
          <div className="float">
              <img className="imagen-tarjetita" src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644326255/proyecto%20final/mascota_3x_ddvdy4.png" alt="imagen perfil" />
              <h3 className="titulo-tarjetita">Estado de la adopción</h3>
              
            </div>
            <img className="flechita-tarjetita" src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644481551/proyecto%20final/arrow_3x_pnjvjg.png" alt="flechita" />
        </Link>
        <div className="info">
          <div className="float">
              <img className="imagen-tarjetita" src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644337269/proyecto%20final/apadrina_3x_m5z2yf.png" alt="imagen perfil" />
              <h3 className="titulo-tarjetita">Apadrinar</h3>
            </div>
            <img className="flechita-tarjetita" src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644481551/proyecto%20final/arrow_3x_pnjvjg.png" alt="flechita" />
        </div>
        <div className="info">
          <div className="float">
              <img className="imagen-tarjetita" src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644337269/proyecto%20final/donar_2x_jmzn7b.png" alt="imagen perfil" />
              <h3 className="titulo-tarjetita">Donar</h3>
            </div>
            <img className="flechita-tarjetita" src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644481551/proyecto%20final/arrow_3x_pnjvjg.png" alt="flechita" />
          </div>
      </div>
    </div>
  </div>
);
};

export default Perfil;
