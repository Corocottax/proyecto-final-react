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
      <form className="div-buscador" onSubmit={handleSubmit}>
        <input
          type="text"
          name="buscar"
          placeholder='Buscar'
          className="input-buscador"
          value={texto}
          onChange={handleInputChange}
        />
      <button className="btn-buscador" type="submit"><img className="lupa" src="/images/lupa.png" alt="lupa"/></button>
      </form>
    </section>
  );
};

export default Buscador;