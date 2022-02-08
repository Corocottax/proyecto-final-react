import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.scss"

const Navbar = () => {

  return (
  <div className='div-navbar'>

    <NavLink to="/inicio" activeclassname={"active"} className={({isActive}) => (isActive ? "active" : "inactive")}>

      <img className='img-navbar' src='https://res.cloudinary.com/dhp2zuftj/image/upload/v1644326192/proyecto%20final/home_3x_qmebln.png' alt='casita'/>
    </NavLink>

    <NavLink to="/mapa" activeclassname={"active"} className={({isActive}) => (isActive ? "active" : "inactive")}>

      <img className='img-navbar' src='https://res.cloudinary.com/dhp2zuftj/image/upload/v1644326255/proyecto%20final/mapa_3x_fgojac.png' alt='direccion'/>
    </NavLink>

    <NavLink to="/adopciones" activeclassname={"active"} className={({isActive}) => (isActive ? "active" : "inactive")}>

      <img className='img-navbar' src='https://res.cloudinary.com/dhp2zuftj/image/upload/v1644326255/proyecto%20final/mascota_3x_ddvdy4.png' alt='adopciones'/>
    
    </NavLink>
    <NavLink to="/perfil" activeclassname={"active"} className={({isActive}) => (isActive ? "active" : "inactive")}>
      
      <img className='img-navbar' src='https://res.cloudinary.com/dhp2zuftj/image/upload/v1644326694/proyecto%20final/chico_3x_zu7cdh.png' alt='perfil'/>
    
    </NavLink>
    <NavLink to="/opciones" activeclassname={"active"} className={({isActive}) => (isActive ? "active" : "inactive")}>
      
      <img className='img-navbar' src='https://res.cloudinary.com/dhp2zuftj/image/upload/v1644326255/proyecto%20final/mS_3x_igzsjz.png' alt='opciones'/>
    
    </NavLink>

  </div>
  );
};

export default Navbar;
