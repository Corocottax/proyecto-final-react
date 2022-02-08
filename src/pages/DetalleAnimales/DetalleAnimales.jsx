import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailInfo from "./Components/DetailInfo";
import "./DetalleAnimales.scss";

export const getAnimalById = (name) => {
  return fetch(
    `https://proyecto-final-api-mocha.vercel.app/api/mascotas/${name}`
  ).then((res) => {
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
  console.log("animal", animal.personalidad);

  useEffect(() => {
    if (id)
      getAnimalById(id).then((data) => {
        setAnimal(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="detail">
      <figure className="detail-figure">
        <img className="detail-figure__img" src={animal.foto} alt={animal.nombre} />
        <figcaption className="detail-figure__name">{animal.nombre}</figcaption>
      </figure>
      <div className="detail-info">
        <DetailInfo detail={animal.especie} title="Especie" />
        <DetailInfo detail={animal.nacimiento} title="Fecha de nacimiento" />
        <DetailInfo detail={animal.sexo} title="Sexo" />
        <DetailInfo detail={animal.tamaño} title="Tamaño" />
        <DetailInfo detail={animal.peso}  title="Peso" />
      </div>
      <div className="detail-personality">
        <h4 className="detail-personality__title">Personalidad</h4>
        <div className="divloco">
        {animal.personalidad && animal.personalidad.map((personalidad) => (
          <div className="detail-personality__div" key={personalidad}>
            <p className="detail-personality__div--p">{personalidad}</p>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default DetalleAnimales;
