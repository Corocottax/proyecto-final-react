import DetailInfo from "./DetailInfo";
import "./DetailData.scss";

const DetailData = ({ animal }) => {
  return (
    <>
      <DetailInfo detail={animal.especie} title="Especie" />
      <DetailInfo detail={animal.nacimiento} title="Fecha de nacimiento" />
      <DetailInfo detail={animal.sexo} title="Sexo" />
      <DetailInfo detail={animal.tamaño} title="Tamaño" />
      <DetailInfo detail={animal.peso} title="Peso" />
      <div className="personality">
        <h4 className="personality-title">Personalidad</h4>
        <div className="personality-content">
          {animal.personalidad &&
            animal.personalidad.map((personalidad) => (
              <div className="personality-content__div" key={personalidad}>
                <p className="personality-content__p">{personalidad}</p>
              </div>
            ))}
        </div>
      </div>
      <div className="history">
        <h4 className="history-title">Historia</h4>
        <p className="history-content">{animal.historia}</p>
      </div>
    </>
  );
};

export default DetailData;
