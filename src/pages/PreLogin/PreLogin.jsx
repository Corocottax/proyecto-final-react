import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import CustomPopup from "../../shared/PopUp/PopUp";
import Splash from '../../shared/Splash/Splash';
import "./PreLogin.scss";
import 'swiper/css';
import "swiper/css/bundle";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const PreLogin = ({setNavbar}) => {
  const [visibility, setVisibility] = useState(true);
  setNavbar(false);
  let navigate = useNavigate();

  const popupCloseHandler = () => {
    setVisibility();
    navigate("/inicio")
  };

  const pagination = {
    clickable: true,
  };
  return ( 
    <>
        <div className="slider-container">
        <div className='splash'>
        <Splash/>
        </div>
        <div className="slider-container-1">
    <CustomPopup
        className="custompop"
        onClose={popupCloseHandler}
        show={visibility}
      >
      
         <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      pagination={pagination}
      className="mySwiper"
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => {/*...*/}}
      onReachEnd={() => {/*...*/}}
    >
      <SwiperSlide><div><img className='slide-img1' src="/images/slider/imagen1.png" alt=""/><h4>Encuentra todo tipo de servicios que tienes cerca de ti</h4></div></SwiperSlide>
      <SwiperSlide><div><img className='slide-img2' src="/images/slider/imagen2.png" alt=""/>
      <h4>Adopta desde tu móvil</h4>
      <p>Puedes acceder al perfil de muchos animales que están en adopción y filtrarlos para encontrar el que mejor se adapte a ti</p></div></SwiperSlide>
      <SwiperSlide><div><img className='slide-img3' src="/images/slider/imagen3.png" alt=""/> <h4>Si eres una asociación sube a tus peludos para darles más difusión</h4><button className='btn-next' onClick={popupCloseHandler}>Continuar</button></div></SwiperSlide>
      
    </Swiper>
    
  </CustomPopup>
  </div>
  </div>

  </>);
};

export default PreLogin;