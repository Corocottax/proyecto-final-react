import React, { useState, useEffect } from 'react';
import './Splash.scss';

const Splash = () => {
    const [showSplash, setShowSplash] = useState(0);

    useEffect(() => {
        const showSplash = setInterval(() => {
          setShowSplash(showSplash => showSplash + 1);
        }, 1000);
        return () => clearInterval(showSplash);
      }, []);

  return (
    <div>
        {showSplash}
        <img src="/images/logoSplash.png" alt="dog logo" />
        <h1>LUCKY</h1>
    </div>
  )
}

export default Splash