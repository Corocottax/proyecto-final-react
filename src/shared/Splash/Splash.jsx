import React, { useState, useEffect } from 'react';
import { Bounce, Fade } from 'react-awesome-reveal';
import PreLogin from '../../pages/PreLogin/PreLogin';
import './Splash.scss';

const Splash = () => {
    const [showSplash, setShowSplash] = useState(0);

    const carga = () => {

      setTimeout(() => {
        
        setShowSplash(1);

      }, 3000);

      setShowSplash(0);

    }

    useEffect(() => {
        
      carga();

    }, []);

  return (
    <>
        {showSplash === 0 &&  <div className="pantallaDeCarga">
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
    </div>}
        
    </>
  )
}

export default Splash