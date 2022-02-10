import React from 'react'
import { Link } from 'react-router-dom'
import "./PreLoginBotones.scss"

const PreLoginBotones = ({setNavbar}) => {
    
    setNavbar(false);

  return (
    <div className="container-prelogin">
    <img className='imagen-prelogin' src="/images/login.png" alt="mujer leyendo con perro"/>
    <div className='container-btn'>
      <h3>¿Como quieres entrar?</h3>
      <Link to="/logIn" className='btn-login'><p>Usuario</p></Link>
      <Link to="/logIn" className='btn-login'><p>Asociacion Protectora</p></Link>
    </div>
  </div>
  )
}

export default PreLoginBotones