import React from 'react';
import { useState, useEffect } from "react";
import PopupFiltroDeEstado from '../PopupFiltroDeEstado/PopupFiltroDeEstado';
import "./EstadoAdopcion.scss"
import { Link, useParams } from 'react-router-dom';
import Buscador from '../../shared/Buscador/Buscador.jsx'


const EstadoAdopcion = ({setNavbar}) => {
  const [visibility, setVisibility] = useState(false);
  const [texto, setTexto] = useState("");
  const getUserById = (id) => {
    return fetch(
      `https://proyecto-final-api-mocha.vercel.app/api/users/${id}`
    ).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return [];
      }
    });
  };
    const [user, setUser] = useState([]);
    let { id } = useParams("estadoAdopcion");
    const [mascota, setMascota] = useState([]);
  
    useEffect(() => {
      if (id)
        getUserById(id).then((data) => {
          setUser(data);
          console.log(data);
        });
    }, []);
    const mascotaFilter = mascota.filter((mascota) =>
    mascota.name.toLowerCase().includes(texto.toLowerCase())
  );
  return (<div>
    <div className="searcher-container">
    <Link to="/perfil"><img src="/images/flecha.png" alt="flecha"/></Link>
    <Buscador texto={texto} setTexto={setTexto} />
    <button onClick={() => setVisibility(!visibility)}className='btn-filter'><img src="/images/filtro.png" alt="filtro"/></button>
    <PopupFiltroDeEstado/>
    </div>
    {user.estadoAdopcion && user.estadoAdopcion.map((estadoAdopcion) => (
      <div> 
      <span>
      <h3>Adopcion de {estadoAdopcion.name}</h3>
      <p></p>
      </span>
      <img src={estadoAdopcion.photo} alt={estadoAdopcion.name} />
    </div>))}
  </div>);
};

export default EstadoAdopcion;
