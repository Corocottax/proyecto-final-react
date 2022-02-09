import React, {useState} from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
import { Link, NavLink } from 'react-router-dom';
>>>>>>> 8bf16922b08380bca049b8be26300756c7568316
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

const PreLogin = () => {
  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = () => {
    setVisibility();
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
  
        <button onClick={() => setVisibility(!visibility)}>pop</button>
        <div className="slider-container-1">
    <CustomPopup
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
      <SwiperSlide><div><img src="/images/slider/imagen1.png" alt=""/><h4>Encuentra todo tipo de servicios que tienes cerca de ti</h4></div></SwiperSlide>
      <SwiperSlide><div><img src="/images/slider/imagen2.png" alt=""/>
      <h4>Adopta desde tu móvil</h4>
      <p>Puedes acceder al perfil de muchos animales que están en adopción y filtrarlos para encontrar el que mejor se adapte a ti</p></div></SwiperSlide>
      <SwiperSlide><div><img src="/images/slider/imagen3.png" alt=""/> <h4>Si eres una asociación sube a tus peludos para darles más difusión</h4></div></SwiperSlide>
      
    </Swiper>
  </CustomPopup>
  </div>
  </div>
  <div className="container-prelogin">
    <img src="/images/login.png" alt="mujer leyendo con perro"/>
    <h3>¿Como quieres entrar?</h3>
    <Link to="/logIn" className='btn-login'>Usuario</Link>
    <Link to="/logIn" className='btn-login'>Asociacion Protectora</Link>
  </div>

  </>);
};

export default PreLogin;
