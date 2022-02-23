import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import { Link } from 'react-router-dom';
import Buscador from '../../shared/Buscador/Buscador';
import "./Mapas.scss"
import L from "leaflet"

const Mapas = ({setNavbar}) => {

  setNavbar(true);

  useEffect(() => {

    
}, [])
/* let interruptor = false;
const myIconFunction = () => { */
  const myIcon = L.icon({
    iconUrl: 'https://res.cloudinary.com/dhp2zuftj/image/upload/v1645610219/proyecto%20final/dog-svgrepo-com_lnufj2.svg',
    iconSize: [32,32],
    iconAnchor: [32, 32],
    iconAnchorSize: [32, 32],
    popupAnchor: [-15, -30],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null
  });

return (
<>
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
          className="imgfiltros"
          src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644422043/proyecto%20final/filtros_3x_etqcy3.png"
          alt="filtrado"
        />
      </div>
<div className='mapa-container'>
  <MapContainer className='mapa' center={[40.45846174434702, -3.694921244554031]} zoom={13}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[40.45846174434702, -3.694921244554031]}>
      <Popup>
        Aquí estás tu.
      </Popup>
    </Marker>
    <Marker
      position={[40.46582751494688, -3.7172591390333984]}
      icon={myIcon}>
      <Popup><a href='https://acuai.org/'>Visitar sitio web</a></Popup>
    </Marker>
    <Marker
      position={[40.430185540376414, -3.680379707362965]}
      icon={myIcon}>
      <Popup><a href='http://www.spap.net/'>Visitar sitio web</a></Popup>
    </Marker>
    <Marker
      position={[40.484837372751635, -3.6598192683374116]}
      icon={myIcon}>
      <Popup><a href='https://nuevavida-adopciones.org/'>Visitar sitio web</a></Popup>
    </Marker>
    <Marker
      position={[40.509685426322946, -3.7219946487762714]}
      icon={myIcon}>
      <Popup><a href='https://asociacion-protectora-de-animales-lucha-animal.ueniweb.com/?utm_campaign=gmb'>Visitar sitio web</a></Popup>
    </Marker>
    <Marker
      position={[40.42474323824317, -3.6571239093187886]}
      icon={myIcon}>
      <Popup><a href='https://arkaanimal.negocio.site/?utm_source=gmb&utm_medium=referral'>Visitar sitio web</a></Popup>
    </Marker>
    <Marker
      position={[40.4022833413325, -3.6381325174215697]}
      icon={myIcon}>
      <Popup><a href='https://ayudaanimales.org/'>Visitar sitio web</a></Popup>
    </Marker>
    <Marker
      position={[40.46557651479167, -3.7170105020476285]}
      icon={myIcon}>
      <Popup><a href='https://nuevavida-adopciones.org/'>Visitar sitio web</a></Popup>
    </Marker>
  </MapContainer>
</div>
</>
);
};

export default Mapas;
