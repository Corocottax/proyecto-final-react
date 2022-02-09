import React from "react";
import './Buscador.scss';

const Buscador = ({texto, setTexto}) => {
;

  const handleInputChange = ({target}) => {
    setTexto(target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    
    console.log(texto);
  }
  return (
    <section className="buscador">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="buscar"
          placeholder='Buscar'
          value={texto}
          onChange={handleInputChange}
        >
      <button className="btn-lupa" type="submit"><img src="/images/lupa.png" alt="lupa"/></button>
        </input>
      </form>
    </section>
  );
};

export default Buscador;
