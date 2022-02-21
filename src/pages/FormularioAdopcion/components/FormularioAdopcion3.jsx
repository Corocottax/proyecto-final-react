import { send } from "emailjs-com";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { API } from "../../../shared/Services/Api";
import "./FormularioAdopcion3.scss"

export const getUserById = async (id) => {

  return await API.get(`api/users/${id}`)

}

const FormularioAdopcion3 = ({ nextStep, handleFormData, prevStep, values }) => {
  const [error, setError] = useState(false);
  const animal = localStorage.getItem("animal");
  const user = localStorage.getItem("user");
  const animalParsed = JSON.parse(animal);
  const userParsed = JSON.parse(user);
  const [arrayMascotasOficial, setArrayMascotasOficial] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {

    if (arrayMascotasOficial.length > 0) {

      fetch(`https://proyecto-final-api-mocha.vercel.app/api/users/${userParsed._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mascotas: arrayMascotasOficial,
        }),
        }).then((response) => {
          console.log(response.status);
          return response.json();
        })
        .then((data) => console.log(data));

        navigate("/estados")

    }

  }, [arrayMascotasOficial])

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

  const submitFormData = (e) => {
    e.preventDefault();
    nextStep(values);
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

      const arrayMascotas = [];

      getUserById(userParsed._id).then((usuario) => { 
      
        usuario.data.mascotas.map((mascota) => {

          console.log(mascota);
          return arrayMascotas.push(mascota)

        })
        arrayMascotas.push(animalParsed._id)
        setArrayMascotasOficial(arrayMascotas)

      })

  };

    const { register, handleSubmit } = useForm();

    const handleChange = (e) => {
      setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

  return (
    <div>
      <div className="adoption-form3-div">
        <div className="form3-title">
          <h2>Formulario de adopción</h2>
        </div>

        <div className="form-progressBar">
          <div className="progressBar-container">
            <div className="progressBar3-filler"></div>
          </div>
        </div>

        <Form onSubmit={submitFormData}>
          <div className="form3-subtitle">
            <h3>Familia y hogar</h3>
          </div>

          <div className="form3-input">
          <Form.Label htmlFor="tipoDeVivienda">¿Dónde vives?</Form.Label>
              <Form.Control
                className="input"
                style={{ border: error ? "2px solid red" : "" }}
                type="text"
                {...register("tipoDeVivienda", {
                  required: true,
                })}
                onChange={handleFormData("tipoDeVivienda")}
              />
          </div>

          <div className="form3-radio-list">

          <div className="form3-radio-unit">

            <div><p>¿Vives de alquiler?</p></div>
            
            <div className="radio">
              <input type="radio" value="Si" />
              Si
              <input type="radio" value="No" />
              No
            </div>
          </div>

          <div className="form3-radio-unit">
            <p>¿Tu casero permite animales?</p>
            <div className="radio">
              <input type="radio" value="Si"/>
              Si
              <input type="radio" value="No" />
              No
            </div>
          </div>

          <div className="form3-radio-unit">
            <p>¿Crees que podrías mudarte pronto?</p>
            <div className="radio">
              <input type="radio" value="Si" />
              Si
              <input type="radio" value="No" />
              No
            </div>
          </div>

          <div className="form3-radio-unit">
            <p>¿Tiene jardín?</p>
            <div className="radio">
              <input type="radio" value="Si" />
              Si
              <input type="radio" value="No" />
              No
            </div>
          </div>

          <div className="form3-radio-unit">
            <p>¿Vives con otras personas?</p>
            <div className="radio">
              <input type="radio" value="Si" />
              Si
              <input type="radio" value="No" />
              No
            </div>
          </div>

          <div className="form3-radio-unit">
            <p>¿Están todos de acuerdo con la adopción?</p>
            <div className="radio">
              <input type="radio" value="Si" />
              Si
              <input type="radio" value="No" />
              No
            </div>
          </div>

          <div className="form3-radio-unit">
            <p>¿Estás de acuerdo con que visitemos tu casa?</p>
            <div className="radio">
              <input type="radio" value="Si" />
              Si
              <input type="radio" value="No" />
              No
            </div>
          </div>
          </div>
          <Button variant="primary" type="submit" className="submit" value="Continuar">
                Final
          </Button>
          </Form>
      </div>
    </div>
  );
};

export default FormularioAdopcion3;
