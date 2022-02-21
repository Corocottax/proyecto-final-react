import React, { useState } from "react";
import "./FormularioAdopcion1.scss";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";



const FormularioAdopcion1 = ({ nextStep, handleFormData, values  }) => {
  const [error, setError] = useState(false);
  const { register, handleSubmit } = useForm();
  const [name, setName] = useState();
  /* const [email, setEmail] = useState(); */
  const [phone, setPhone] = useState();
  const [dni, setDni] = useState();

  const submitFormData = (e) => { 
    nextStep(values);
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
      <Form onSubmit={submitFormData}>
        <div className="form-subtitle">
          <h3>Tus datos</h3>
        </div>
        <Form.Label htmlFor="name"></Form.Label>
        <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="name"
                defaultValue={values.name}
                type="text"
                placeholder="Nombre y apellidos"
                onChange={handleFormData("name")}
              />
        <Form.Label htmlFor="name"></Form.Label>
        <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="email"
                defaultValue={values.email}
                type="text"
                placeholder="Email"
                onChange={handleFormData("email")}
                {...register("email", {
                  required: true,
                  pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                })}
              />
        <Form.Label htmlFor="phone"></Form.Label>
        <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="phone"
                defaultValue={values.phone}
                type="phone"
                placeholder="Phone"
                onChange={handleFormData("phone")}
                {...register("phone", {
                  required: true,
                })}
              />
        <Form.Label htmlFor="dni"></Form.Label>
        <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="dni"
                defaultValue={values.phone}
                type="dni"
                placeholder="DNI"
                onChange={handleFormData("dni")}
                {...register("dni", {
                  required: true,
                })}
              />

        <div className="form-subtitle">
          <h3>Dirección</h3>
        </div>
        <Form.Label htmlFor="address"></Form.Label>
        <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="address"
                defaultValue={values.address}
                type="address"
                placeholder="Calle, número, piso"
                onChange={handleFormData("address")}
                {...register("address", {
                  required: true,
                })}
              />
        <Form.Label htmlFor="postalCode"></Form.Label>
        <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="postalCode"
                defaultValue={values.postalCode}
                type="postalCode"
                placeholder="Código postal"
                onChange={handleFormData("postalCode")}
                {...register("postalCode", {
                  required: true,
                })}
              />
        <Form.Label htmlFor="city"></Form.Label>
        <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="city"
                defaultValue={values.city}
                type="city"
                placeholder="Ciudad"
                onChange={handleFormData("city")}
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
        <div className="div-siguiente">
            <Button className="detail-adopt__btn" variant="primary" type="submit">
            Siguiente
            </Button>
        </div>
        </Form>
    </div>
  );
};

export default FormularioAdopcion1;