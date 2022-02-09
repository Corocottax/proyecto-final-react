import React, { useState, useEffect } from 'react';
import { Bounce, Fade } from 'react-awesome-reveal';
import PreLogin from '../../pages/PreLogin/PreLogin';
import './Splash.scss';
import Reveal from 'react-awesome-reveal';
import { keyframes } from "@emotion/react"

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }`;

const Splash = () => {
  const [showSplash, setShowSplash] = useState(0);

  const carga = () => {
    setTimeout(() => {
      setShowSplash(1);
    }, 5000);

    setShowSplash(0);
  };

  useEffect(() => {
    carga();
  }, [])

  return (
    <>
        {showSplash === 0 &&  <div className="pantallaDeCarga">
        <Reveal delay={2000} keyframes={fadeOut}>
        <Bounce>
          <img
            src="https://res.cloudinary.com/ddbvk5mrr/image/upload/v1644320679/App-Pet/logo_hyfwge.png"
            alt="logo"
          />
        </Bounce>
        <Fade delay={1000} triggerOnce>
          <img
            src="https://res.cloudinary.com/ddbvk5mrr/image/upload/v1644320680/App-Pet/title_u1r9rk.png"
            alt="title"
          />
        </Fade>
        </Reveal>
    </div>}
        
    </>
  );
};

export default Splash;
