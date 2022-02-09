import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { useParams } from 'react-router-dom';
import { getNoticiaById } from '../Funciones/Funciones';
import Volver from '../Volver/Volver';
import "./NoticiasDetail.scss"
import PintadoDetalle from './PintadoDetalle/PintadoDetalle';

const NoticiasDetail = ({setNavbar}) => {

  let { id } = useParams("id");
  const [noticia, setNoticia] = useState();
  setNavbar(true);

  useEffect(() => {

    if (id)
    getNoticiaById(id).then((data) => {

      setNoticia(data);

    });

}, [id]);

  return (
    
    <div className='vista'>

      <Volver />

      <div className='div-noticia'>
        <Fade>
          {noticia && <PintadoDetalle noticia={noticia} />}
        </Fade>
      </div>
    </div>
  );
};

export default NoticiasDetail;
