import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./PreLogin.scss";
import 'swiper/css';
import "swiper/css/bundle";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const PreLogin = () => {

  const pagination = {
    clickable: true,
  };
  return <div className="slider-container">
      
         <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      pagination={pagination}
      className="mySwiper"
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => {/*...*/}}
      onReachEnd={() => {/*...*/}}
    >
      <SwiperSlide><div><img src="/images/slider/imagen1.png" alt=""/><h3>Encuentra todo tipo de servicios que tienes cerca de ti</h3></div></SwiperSlide>
      <SwiperSlide><div><img src="/images/slider/imagen2.png" alt=""/>
      <h3>Adopta desde tu móvil</h3>
      <p>Puedes acceder al perfil de muchos animales que están en adopción y filtrarlos para encontrar el que mejor se adapte a ti</p></div></SwiperSlide>
      <SwiperSlide><div><img src="/images/slider/imagen3.png" alt=""/> <h3>Si eres una asociación sube a tus peludos para darles más difusión</h3></div></SwiperSlide>
      
    </Swiper>
  </div>;
};

export default PreLogin;
