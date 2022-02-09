import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { useParams } from 'react-router-dom';
import { getNoticiaById } from '../Funciones/Funciones';
import Volver from '../Volver/Volver';
import "./NoticiasDetail.scss"
import PintadoDetalle from './PintadoDetalle/PintadoDetalle';

const NoticiasDetail = () => {

  let { id } = useParams("id");
  const [noticia, setNoticia] = useState();

  useEffect(() => {

    if (id)
    getNoticiaById(id).then((data) => {

      setNoticia(data);

    });

}, [id]);

  return (
    
    <div className='vista'>

      <Volver />

      <Fade>
        {noticia && <PintadoDetalle noticia={noticia} />}
      </Fade>
    </div>
  );
};

export default NoticiasDetail;
