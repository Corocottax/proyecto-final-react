import React, { useEffect, useState } from "react";
import "./FormularioAdopcion.scss";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const FormularioAdopcion = ({ setNavbar }) => {
  const { register, handleSubmit } = useForm();

  const user = localStorage.getItem("user");
  const userParsed = JSON.parse(user);

  setNavbar(true);
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

 /*  const URL = process.env.URL;
  console.log(URL); */

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="adoption-form-div">
      <div className="form-title">
        <h2>Formulario de adopción</h2>
      </div>

      <div className="form-progressBar">
        <div className="progressBar-container">
          <div className="progressBar1-filler"></div>
        </div>
      </div>

      <form>
        <div className="form-subtitle">
          <h3>Tus datos</h3>
        </div>
        <label htmlFor="name"></label>
        <input
          name="from_name"
          id="name"
          placeholder="Nombre y apellidos"
          {...register("name", { required: true })}
          onChange={handleChange}
        />
        <label htmlFor="from_email"></label>
        <input
          name="from_email"
          id="email"
          placeholder="Email"
          {...register("email", {
            required: true,
            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          })}
          onChange={handleChange}
        />
        <label htmlFor="phone"></label>
        <input
          name="phone"
          id="phone"
          type="phone"
          placeholder="Teléfono"
          {...register("phone", {
            required: true,
          })}
          onChange={handleChange}
        />

        <label htmlFor="dni"></label>
        <input
          name="dni"
          id="dni"
          type="dni"
          placeholder="DNI"
          {...register("dni", {
            required: true,
          })}
          onChange={handleChange}
        />

        <div className="form-subtitle">
          <h3>Dirección</h3>
        </div>

        <label htmlFor="address"></label>
        <input
          name="address"
          id="address"
          placeholder="Calle, número, piso"
          {...register("address", { required: true })}
          onChange={handleChange}
        />

        <label htmlFor="postalCode"></label>
        <input
          name="postalCode"
          id="postalCode"
          placeholder="Código postal"
          {...register("postalCode", {
            required: true,
          })}
          onChange={handleChange}
        />

        <label htmlFor="city"></label>
        <input
          name="city"
          id="city"
          type="city"
          placeholder="Ciudad"
          {...register("city", {
            required: true,
          })}
          onChange={handleChange}
        />

        <div className="checkbox-div">
          <input
            className="checkbox"
            type="checkbox"
            id="cbox1"
            value="Terms_checkbox"
          />
          <p className="checkbox-text">
            Acepto los términos y condiciones de la adopción
          </p>
        </div>
        <div className="div-siguiente">
          <Link className="Link" to="/formularioAdopcion2">
            <button className="detail-adopt__btn">Siguiente</button>
          </Link>
        </div>
      </form>

    </div>
  );
};

export default FormularioAdopcion;
