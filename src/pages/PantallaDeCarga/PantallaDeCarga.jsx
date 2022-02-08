import React from "react";
import "./PantallaDeCarga.scss";
import { Fade, Bounce } from "react-awesome-reveal";

const PantallaDeCarga = () => {
  return (
    <div className="pantallaDeCarga">
        <Bounce>
      <img
        src="https://res.cloudinary.com/ddbvk5mrr/image/upload/v1644320679/App-Pet/logo_hyfwge.png"
        alt="logo"
      />
      </Bounce>
      <Fade duration={1000} triggerOnce>
      <img
        src="https://res.cloudinary.com/ddbvk5mrr/image/upload/v1644320680/App-Pet/title_u1r9rk.png"
        alt="title"
      />
      </Fade>
    </div>
  );
};

export default PantallaDeCarga;
