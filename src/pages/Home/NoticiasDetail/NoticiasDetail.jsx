import React from 'react';
import "./NoticiasDetail.scss"

const NoticiasDetail = ({noticia}) => {
  return (
  <div className='noticia-detail'>

    <img src={noticia.img} alt={noticia.title} />
    <h2>{noticia.title}</h2>
    <p>{noticia.description}</p>

  </div>
  );
};

export default NoticiasDetail;
