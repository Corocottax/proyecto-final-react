import React, { useEffect } from 'react';
import "./Mapas.scss"

const Mapas = ({setNavbar}) => {

  setNavbar(true);

  useEffect(() => {

    new window.google.maps.Map(document.getElementById("map"), {

        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,

      });
}, [])

const mapStyleS = {height: '500px'}
return (
    <div className="App">
        <div style={mapStyleS} id="map"/>
    </div>
);
};

export default Mapas;
