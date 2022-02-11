import React, { useState } from "react";
import "./FormularioAdopcion.scss";
import { useForm } from "react-hook-form";
import { send } from "emailjs-com";

const FormularioAdopcion = ({ setNavbar }) => {
  const { register, handleSubmit } = useForm();
  setNavbar(true);
  const [toSend, setToSend] = useState({
    from_name: "",
    from_email: "",
    address: "",
    postalCode: "",
    city: "",
    phone: "",
    reply_to: "",

  });

  const Url = process.env.Url;

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_ei8jiek",
      "template_wzp8r4e",
      toSend,
      "user_Em80CyZWKh5zdpC0E5tMK"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });

      const animal = localStorage.getItem("animal");
      const user = localStorage.getItem("user");
      const animalParsed = JSON.parse(animal);
      const userParsed = JSON.parse(user);
      const arrayMascotas = [];
      console.log(userParsed.mascotas);
      arrayMascotas.push(userParsed.mascotas)
      arrayMascotas.push(animalParsed._id)
      console.log(arrayMascotas);
      

      fetch(`${Url}api/users/${userParsed._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mascotas: arrayMascotas,
        }),
        })

    };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="adoption-form-div">
      <div className="form-title">
        <h2>Formulario de adopción</h2>
      </div>
      <form onSubmit={onSubmit}>
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
          <button className="detail-adopt__btn">Siguiente</button>
        </div>
      </form>
    </div>
  );
};

export default FormularioAdopcion;
