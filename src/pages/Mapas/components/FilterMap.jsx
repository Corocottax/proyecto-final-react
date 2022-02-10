import React, {useState} from 'react';
import CustomPopup from "../../../shared/PopUp/PopUp";
import './FilterMap.scss';

const FilterMap = () => {
    const [visibility, setVisibility] = useState(false);
    const popupCloseHandler = () => {
      setVisibility();
    };
  return (
    <div>
       <img
          onClick={(e) => setVisibility(!visibility)}
          className="imgfiltros"
          src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644422043/proyecto%20final/filtros_3x_etqcy3.png"
          alt="filtrado"
        />

<div className='container-filter'>
        <CustomPopup
        onClose={popupCloseHandler}
        show={visibility}
      >
          <div>
          <h3 className='title-filter'>Filtros</h3>
          <div className='container-btn-filter'>
          <button className='btn-filter'><img src="/images/mapsicons/icon1.png" alt="veterinario" /></button>
          <button className='btn-filter'><img src="/images/mapsicons/icon2.png" alt="peluqueria" /></button>
          <button className='btn-filter'><img src="/images/mapsicons/icon3.png" alt="pet friendly" /></button>
          <button className='btn-filter'><img src="/images/mapsicons/icon4.png" alt="educacion" /></button>
          <button className='btn-filter'><img src="/images/mapsicons/icon5.png" alt="guardería" /></button>
          <button className='btn-filter'><img src="/images/mapsicons/icon6.png" alt="tienda" /></button>
          </div>
          <button className='btn-submit'>Aplicar</button>
          </div>

      </CustomPopup>
        </div>
    </div>
  )
}

export default FilterMap