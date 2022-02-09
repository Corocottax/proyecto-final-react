import React from 'react';
import { Link } from 'react-router-dom';
import "./Volver.scss"

const Volver = () => {
  return (
  <div>

    <Link to="/home" className='volver'>
        <img className='flechita' src='https://res.cloudinary.com/dhp2zuftj/image/upload/v1644405981/proyecto%20final/left-arrow_zvgl53.png' alt='flechita' />
        <h3>Volver</h3>
    </Link>

  </div>);
};

export default Volver;
