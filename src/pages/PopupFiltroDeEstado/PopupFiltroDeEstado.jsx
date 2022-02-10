import React from 'react';
import CustomPopup from "../../shared/PopUp/PopUp";
import "./PopupFiltroDeEstado.scss"

const PopupFiltroDeEstado = () => {
  return (
<>
<CustomPopup
        onClose={popupCloseHandler}
        show={visibility}
      >
        <div className='container-filter'>
          <h3 className='title-filter'>Filtros</h3>
          <div className='container-btn-filter'>
          <button className='btn-filter'><img src="/images/completado.png" alt="completado" /></button>
          <button className='btn-filter'><img src="/images/proceso.png" alt="en proceso" /></button>
          <button className='btn-filter'><img src="/images/rechazado.png" alt="rechazado" /></button>
          </div>
          <button onClick={submit} className='btn-submit'>Aplicar</button>
        </div>


      </CustomPopup>
      </>)
};

export default PopupFiltroDeEstado;
