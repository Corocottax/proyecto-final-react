import React, {useState} from 'react';
import CustomPopup from "../../shared/PopUp/PopUp";
import "./PopupFiltroDeEstado.scss"


const PopupFiltroDeEstado = () => {
  const [visibility, setVisibility] = useState(false);
  const popupCloseHandler = () => {
    setVisibility();
  };
  /*const onSubmit = () => {
    API.post("api/users", ).then((res) => {const onSubmit = () => {
    )}}}*/
      
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
          <button className='btn-submit'>Aplicar</button>
        </div>


      </CustomPopup>
      </>)
};

export default PopupFiltroDeEstado;
