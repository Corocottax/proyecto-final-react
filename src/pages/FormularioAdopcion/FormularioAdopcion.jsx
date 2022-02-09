import React from "react";
import "./FormularioAdopcion.scss";
import { useForm } from "react-hook-form";
import { Button } from "bootstrap";
import FormularioAdopcion2 from "./components/FormularioAdopcion2";

const FormularioAdopcion = ({ setNavbar }) => {
  const { register, handleSubmit } = useForm();
  setNavbar(false);

  const formulario = [{}];

  return (
    <div className="adoption-form-div">
      <div className="form-title">
        <h2>Formulario de adopción</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-subtitle">
          <h3>Tus datos</h3>
        </div>
        <label htmlFor="name"></label>
        <input
          id="name"
          placeholder="Nombre y apellidos"
          {...register("name", { required: true })}
        />
        <label htmlFor="email"></label>
        <input
          id="email"
          placeholder="Email"
          {...register("email", {
            required: true,
            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          })}
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
        />

        <div className="form-subtitle">
          <h3>Dirección</h3>
        </div>

        <label htmlFor="address"></label>
        <input
          id="address"
          placeholder="Calle, número, piso"
          {...register("address", { required: true })}
        />

        <label htmlFor="postalCode"></label>
        <input
          id="postalCode"
          placeholder="Código postal"
          {...register("postalCode", {
            required: true,
          })}
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

        <button
          type="button"
          className="submit"
          value="Continuar"
          onClick={() => <FormularioAdopcion2 formulario={formulario} />}
        />
      </form>
    </div>
  );
};

export default FormularioAdopcion;
