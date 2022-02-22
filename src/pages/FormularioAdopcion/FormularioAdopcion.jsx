import React, { useState } from "react";
import "./FormularioAdopcion.scss";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import FormularioAdopcion1 from "./components/FormularioAdopcion1";
import FormularioAdopcion2 from "./components/FormularioAdopcion2";
import FormularioAdopcion3 from "./components/FormularioAdopcion3";
import Final from "./components/Final";

const FormularioAdopcion = ({ setNavbar }) => {
  const [step, setstep] = useState(1);
  const { register, handleSubmit } = useForm();


  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
  })

  const nextStep = () => {
    setstep(step + 1);
  };

  const prevStep = () => {
    setstep(step - 1);
  };

  const handleInputData = input => e => {
    const {value } = e.target;

    setFormData(prevState => ({
      ...prevState,
      [input]: value
  }));
  }
  switch (step) {
    
    case 1:
      return (
        <div className=".adoption-form-div">
             <Container>
            <Row>
              <Col>
                <FormularioAdopcion1 nextStep={nextStep} handleFormData={handleInputData} values={formData} />
                </Col>
            </Row>
          </Container>
        </div>
      );
    
    case 2:
      return (
        <div className=".adoption-form-div">
              <Container>
            <Row>
              <Col>
                <FormularioAdopcion2 nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
              </Col>
              </Row>
          </Container>
        </div>
      );
     
      case 3:
        return (
          <div className=".adoption-form-div">
               <Container>
            <Row>
              <Col>
                  <FormularioAdopcion3 nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
              </Col>
            </Row>
          </Container>
          </div>
        );
    default:
      return (
        <div className=".adoption-form-div">
        </div>
      );
  }
};

export default FormularioAdopcion;
