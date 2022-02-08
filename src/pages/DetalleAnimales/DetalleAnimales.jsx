import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detalle from "./Components/Detail";
import "./DetalleAnimales.scss";


export const getAnimalById = (name) => {
  return fetch(`https://proyecto-final-api-mocha.vercel.app/api/mascotas/${name}`).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return [];
    }
  });
};

const DetalleAnimales = () => {
  const [animal, setAnimal] = useState([]);
  let { id } = useParams("name");

  useEffect(() => {
    if (id)
      getAnimalById(id).then((data) => {
        setAnimal(data);
        console.log(data);
      });
  }, []);

  return <div>
  <figure>
  <img src={animal.foto} alt={animal.nombre}/>
  <figcaption>{animal.nombre}</figcaption>
  </figure>
  <div>
    <Detalle detail={animal.especie} title="Especie"/>
  </div>
  </div>;
};

export default DetalleAnimales;
