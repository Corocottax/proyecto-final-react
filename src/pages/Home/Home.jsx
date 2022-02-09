import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';
import "./Home.scss"
import NoticiasDetail from './NoticiasDetail/NoticiasDetail';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Fade } from 'react-awesome-reveal';
import { generatePath, Link } from 'react-router-dom';

const Home = () => {

  const UrlNoticias = "https://proyecto-final-api-mocha.vercel.app/api/noticias";
  const [noticias, setNoticias] = useState([]);
  const arrayNoticias = [];

  const getNoticias = async () => {

    const noticias = await axios(UrlNoticias);

    for (const noticia of noticias.data) {
      
      arrayNoticias.push(noticia);

    }
    setNoticias(arrayNoticias);
    return noticias;

  }

  useEffect(() => {
  
    getNoticias();
  
  }, []);

  const pagination = {
    clickable: true,
    renderBullet: function (className) {
      return '<span class="' + className + '"></span>';
    },
  };

  return (
  <div className='noticias'>

  <h2 className='saludo'>¡Hola Persona!</h2>

    <div className='div-swiper'>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={"auto"}
        centeredSlides={true}
        onSlideChange={() => {/*...*/}}
        onReachEnd={() => {/*...*/}}
        pagination={{
            pagination
        }}
        className="swiper"
      >
        <SwiperSlide>
          <div className='tarjeta'>
            <img className='img-tarjeta'  src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644337269/proyecto%20final/apadrina_3x_m5z2yf.png" alt="apadrinar"/>
            <div className='info-tarjeta'>
              <h3 className='title-tarjeta'>Apadrina un bebote</h3>
              <p className='p-tarjeta'>Puedes apadrinar un pedazo de bebote super guapo y to flama</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='tarjeta'>
            <img className='img-tarjeta' src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644326255/proyecto%20final/mascota_3x_ddvdy4.png" alt="perrito"/>
            <div className='info-tarjeta'>
              <h3 className='title-tarjeta'>Estado de la adopción</h3>
              <p className='p-tarjeta'>Revisa el proceso de tus adopciones en curso</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='tarjeta'>
            <img className='img-tarjeta'  src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644337269/proyecto%20final/donar_3x_yi5ltm.png" alt="donar"/>
            <div className='info-tarjeta'>
              <h3 className='title-tarjeta'>Donar</h3>
              <p className='p-tarjeta'>Dona para que podamos cuidar mejor de los animaletes</p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>

    </div>

    <hr className='hr-home'/>

    <h3 className='novedades'>Novedades</h3>

    <div className='div-novedades'>

    {noticias && noticias.map((noticia, index) => {

      return (

        <Fade key={index} delay={200} triggerOnce>
          <Link className="Link" to={generatePath("/home/:id", { id: noticia._id })}>
            <div className='noticia' onClick={() => <NoticiasDetail noticia={noticia} />}>
              <img className='img-noticia' src={noticia.img} alt={noticia.title} />
              <h3 className='h3-noticia'>{noticia.title}</h3>
            </div>
          </Link>
        </Fade>

      )

    })}

    </div>

  </div>
  );
};

export default Home;
