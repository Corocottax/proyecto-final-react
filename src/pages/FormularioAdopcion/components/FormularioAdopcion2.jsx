import React, { useState } from "react";
import "./FormularioAdopcion2.scss";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const FormularioAdopcion2 = ({ setNavbar }) => {

  const [toSend, setToSend] = useState({
    
    from_name: "",
    from_email: "",
    address: "",
    dni: "",
    postalCode: "",
    city: "",
    phone: "",
    otrasMascotas: "",
    otrasMascotasComportamiento: "",
    porqueAdopta: "",
    sabeNecesidades: "",
    sabeGastos: "",
    sabeAlimentacion: "",
    tipoDeVivienda: "",
    reply_to: "",
    
  });

  const { register, handleSubmit } = useForm();

  setNavbar(true);

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="adoption-form2-div">
        <div className="form2-title">
          <h2>Formulario de adopción</h2>
        </div>

        <div className="form-progressBar">
          <div className="progressBar-container">
            <div className="progressBar2-filler"></div>
          </div>
        </div>

        <form>
          <div className="form2-subtitle">
            <h3>Sobre las mascotas</h3>
          </div>

          <div className="form2-radio">
            <p>¿Tienes otros animales?</p>
            <div className="radio">
              <label>
                <input type="radio" value="Si" />
                Si
              </label>

              <label>
                <input type="radio" value="No" />
                No
              </label>
            </div>
          </div>

          <div className="form2-inputs">
            <input
              name="otrasMascotas"
              id="otrasMascotas"
              type="text"
              onChange={handleChange}
              placeholder="¿Cuáles?"
              {...register("otrasMascotas", {
                required: true,
              })}
            />

            <input
              name="otrasMascotasComportamiento"
              id="otrasMascotasComportamiento"
              type="text"
              onChange={handleChange}
              placeholder="¿Se lleva bien con otros animales?"
              {...register("otrasMascotasComportamiento", {
                required: true,
              })}
            />
          </div>

          <div className="form2-inputsGrandes">
            <label>¿Por qué has elegido adoptar?</label>
            <input
              name="porqueAdopta"
              id="porqueAdopta"
              type="text"
              placeholder=""
              onChange={handleChange}
              {...register("porqueAdopta", {
                required: true,
              })}
            />

            <label>¿Conoces las necesidades del animal?</label>
            <input
              name="sabeNecesidades"
              id="sabeNecesidades"
              type="text"
              placeholder=""
              onChange={handleChange}
              {...register("sabeNecesidades", {
                required: true,
              })}
            />

            <label>¿Conoces sus gastos?</label>
            <input
              name="sabeGastos"
              id="sabeGastos"
              type="text"
              placeholder=""
              onChange={handleChange}
              {...register("sabeGastos", {
                required: true,
              })}
            />

            <label>¿Conoces su alimentación?</label>
            <input
              name="sabeAlimentacion"
              id="sabeAlimentacion"
              type="text"
              placeholder=""
              onChange={handleChange}
              {...register("sabeAlimentacion", {
                required: true,
              })}
            />
          </div>

          <Link className="Link" to="/formularioAdopcion3">
            <button className="detail-adopt__btn">Siguiente</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default FormularioAdopcion2;
