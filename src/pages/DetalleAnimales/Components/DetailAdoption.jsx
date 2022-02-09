import React from "react";
import "./DetailAdoption.scss";

const DetailAdoption = ({ animal }) => {
  return (
    <div className="adoption">
      <div className="adoption-requirements">
        <h4 className="adoption-requirements__title">Requisitos de adopción</h4>
        <p className="adoption-requirements__content">{animal.requisitosAdopcion}</p>
      </div>
      <div className="adoption-price">
        <h4 className="adoption-price__title">Tasa de adopción</h4>
        <p className="adoption-price__content">{animal.precio}</p>
      </div>
      <div className="adoption-shipping">
        <h4 className="adoption-shipping-title">¿Se envía a otra ciudad?</h4>
        <p className="adoption-shipping__content">{animal.envio}</p>
      </div>
    </div>
  );
};

export default DetailAdoption;
