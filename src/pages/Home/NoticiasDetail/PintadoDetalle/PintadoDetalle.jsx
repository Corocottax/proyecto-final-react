import React from 'react';
import "./PintadoDetalle.scss"

const PintadoDetalle = ({noticia}) => {
  return (
    <div className='noticia-detail'>

    <img className='noticia-img' src={noticia.img} alt={noticia.title} />
    <h2 className='noticia-title'>{noticia.title}</h2>
    <p className='noticia-p'>{noticia.description}</p>

  </div>
  );
};

export default PintadoDetalle;
