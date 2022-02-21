import React, { useState } from "react";
import "./FormularioAdopcion2.scss";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const FormularioAdopcion2 = ({ nextStep, handleFormData, prevStep, values}) => {
  const [error, setError] = useState(false);

  const { register, handleSubmit } = useForm();


  const submitFormData = (e) => {
    e.preventDefault();
    nextStep(values);
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
        <Form onSubmit={submitFormData}>
      
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
              <Form.Label htmlFor="otrasMascotas"></Form.Label>
              <Form.Control
                className="input"
                style={{ border: error ? "2px solid red" : "" }}
                type="text"
                placeholder="¿Cuáles?"
                {...register("otrasMascotas", {
                  required: true,
                })}
                onChange={handleFormData("otrasMascotas")}
              />
          <Form.Label htmlFor="otrasMascotasComportamiento"></Form.Label>
              <Form.Control
                className="input"
                style={{ border: error ? "2px solid red" : "" }}
                type="text"
                placeholder="¿Se lleva bien con otros animales?"
                {...register("otrasMascotasComportamiento", {
                  required: true,
                })}
                onChange={handleFormData("otrasMascotasComportamiento")}
              />
          </div>

          <div className="form2-inputsGrandes">
          <Form.Label htmlFor="porqueAdopta">¿Por qué has elegido adoptar?</Form.Label>
              <Form.Control
                className="input"
                style={{ border: error ? "2px solid red" : "" }}
                type="text"
                placeholder=""
                {...register("otrasMascotasComportamiento", {
                  required: true,
                })}
                onChange={handleFormData("porqueAdopta")}
              />
              <Form.Label htmlFor="sabeNecesidades">¿Conoces las necesidades del animal?</Form.Label>
              <Form.Control
                className="input"
                style={{ border: error ? "2px solid red" : "" }}
                type="text"
                placeholder=""
                {...register("sabeNecesidades", {
                  required: true,
                })}
                onChange={handleFormData("sabeNecesidades")}
              />
              <Form.Label htmlFor="sabeGastos">¿Conoces sus gastos?</Form.Label>
              <Form.Control
                className="input"
                style={{ border: error ? "2px solid red" : "" }}
                type="text"
                placeholder=""
                {...register("sabeGastos", {
                  required: true,
                })}
                onChange={handleFormData("sabeGastos")}
              />
              <Form.Label htmlFor="sabeAlimentacion">¿Conoces su alimentación?</Form.Label>
              <Form.Control
                className="input"
                style={{ border: error ? "2px solid red" : "" }}
                type="text"
                placeholder=""
                {...register("sabeAlimentacion", {
                  required: true,
                })}
                onChange={handleFormData("sabeAlimentacion")}
              />
          </div>
          <div className="btns-contain">
          <Button className="detail-adopt__btn" onClick={prevStep}>
                Anterior
          </Button>
          <Button variant="primary" type="submit" className="detail-adopt__btn">
                Siguiente
          </Button>
          </div>
          </Form>
      </div>
    </div>
  );
};

export default FormularioAdopcion2;
