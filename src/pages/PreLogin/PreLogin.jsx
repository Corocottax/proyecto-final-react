import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./PreLogin.scss"

const PreLogin = () => {
  return <div className="slider-container">
         <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src="/images/slider/imagen1.png" alt=""/><h3>Encuentra todo tipo de servicios que tienes cerca de ti</h3></SwiperSlide>
      <SwiperSlide><img src="/images/slider/imagen2.png" alt=""/>
      <h3>Adopta desde tu móvil</h3>
      <p>Puedes acceder al perfil de muchos animales que están en adopción y filtrarlos para encontrar el que mejor se adapte a ti</p></SwiperSlide>
      <SwiperSlide><img src="/images/slider/imagen3.png" alt=""/> <h3>Si eres una asociación sube a tus peludos para darles más difusión</h3></SwiperSlide>
      ...
    </Swiper>
  </div>;
};

export default PreLogin;
