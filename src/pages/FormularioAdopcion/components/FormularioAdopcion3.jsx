import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

const FormularioAdopcion3 = ({ setNavbar }) => {

    const { register, handleSubmit } = useForm();
  setNavbar(true);
  
  const onSubmit = (e) => {}

  return (
    <div>
      <div className="adoption-form-div">
        <div className="form-title">
          <h2>Formulario de adopción</h2>
        </div>

        <form onChange={handleSubmit(onSubmit)}>
          <div className="form-subtitle">
            <h3>Familia y hogar</h3>
          </div>

          <div className="form-inputs3">
            <input
              name="otrasMascotas"
              id="otrasMascotas"
              type="text"
              placeholder="¿Cuáles?"
              {...register("otrasMascotas", {
                required: true,
              })}
            />
          </div>

          <p>¿Tienes otros animales?</p>

          
            <div className="form-radio-list"></div>

            <div className="form-radio-unit">

              <div className="radio">
                <label>
                  <input
                    type="form-radio"
                    value="Si"
             
                  />
                  Si
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value="No"
               
                  />
                  No
                </label>
              </div>

              <div className="radio">
                <label>
                  <input
                    type="form-radio"
                    value="Si"
              
                  />
                  Si
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value="No"
                
                  />
                  No
                </label>
              </div>
            </div>
          

          <div className="form-inputs">
            <input
              name="otrasMascotas"
              id="otrasMascotas"
              type="text"
              placeholder="¿Cuáles?"
              {...register("otrasMascotas", {
                required: true,
              })}
            />

            <input
              name="otrasMascotasComportamiento"
              id="otrasMascotasComportamiento"
              type="text"
              placeholder="¿Se lleva bien con otros animales?"
              {...register("otrasMascotasComportamiento", {
                required: true,
              })}
            />
          </div>

          <div className="form-inputsGrandes">
            <label>¿Por qué has elegido adoptar?</label>
            <input
              name="porqueAdopta"
              id="porqueAdopta"
              type="text"
              placeholder=""
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
              {...register("sabeAlimentacion", {
                required: true,
              })}
            />
          </div>

          <input className="submit" type="submit" value="Continuar" />
        </form>
      </div>
    </div>
  );
};

export default FormularioAdopcion3;
