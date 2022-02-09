import React from "react";
import DetailInfo from "./DetailInfo";
import "./DetailHealth.scss"

const DetailHealth = ({animal}) => {
    console.log(animal);
  return (
    <>
      <DetailInfo detail={animal.vacunado} title="Vacunado" />
      <DetailInfo detail={animal.desparasitado} title="Desparasitado" />
      <DetailInfo detail={animal.sano} title="Sano" />
      <DetailInfo detail={animal.esterilizado} title="Esterilizado" />
      <DetailInfo detail={animal.identificado} title="Identificado" />
      <DetailInfo detail={animal.microchip} title="Microchip" />
      <div className="comment">
      <h4 className="comment-title">Tienes que saber que</h4>
        <p className="comment-content">{animal.comentarios}</p>
      </div>
    </>
  );
};

export default DetailHealth;
