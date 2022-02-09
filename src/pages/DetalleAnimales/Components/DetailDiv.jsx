import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnimalById } from "../DetalleAnimales";
import DetailInfo from "./DetailInfo";

const DetailDiv = ({animal}) => {
        
  return (
    <>
      <DetailInfo detail={animal.especie} title="Especie" />
      <DetailInfo detail={animal.nacimiento} title="Fecha de nacimiento" />
      <DetailInfo detail={animal.sexo} title="Sexo" />
      <DetailInfo detail={animal.tamaño} title="Tamaño" />
      <DetailInfo detail={animal.peso} title="Peso" />
    </>
  );
};

export default DetailDiv;
