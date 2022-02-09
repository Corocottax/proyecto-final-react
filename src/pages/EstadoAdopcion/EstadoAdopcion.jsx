import React from 'react';
import { useState, useEffect } from "react";
import "./EstadoAdopcion.scss"
import axios from 'axios';
import { Link } from 'react-router-dom';
import Buscador from '../../shared/Buscador/Buscador.jsx'


const EstadoAdopcion = () => {
  const [texto, setTexto] = useState("");
  const [mascotas, setMascotas] = useState([]);
  const UrlAnimales =
  "https://proyecto-final-api-mocha.vercel.app/api/mascotas";
  
  useEffect(() => {
    axios(UrlAnimales).then((res) => {
      setMascotas(res.data);
    });
  }, []);

  return (<div>
    <div className="searcher-container">
    <Link to="/perfil"><img src="/images/flecha.png" alt="flecha"/></Link>
    <Buscador texto={texto} setTexto={setTexto} />
    <button className='btn-filter'><img src="/images/filtro.png" alt="filtro"/></button>
    </div>
    <div>
      <span>
      <h3>Adopcion de {mascotas.name}</h3>
      </span>
      <img src={mascotas.photo} alt={mascotas.name} />
    </div>
  </div>);
};

export default EstadoAdopcion;
