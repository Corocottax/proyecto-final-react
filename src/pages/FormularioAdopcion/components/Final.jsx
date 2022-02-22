import React from "react";
import { Card } from "react-bootstrap";

const Final = ({ values }) => {

   /* const [toSend, setToSend] = useState({
    
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
      const handleChange = (e) => {
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
        }*/
  const { 
  name, 
  email, 
  address, 
  dni, 
  postalCode, 
  city, 
  phone, 
  otrasMascotas, 
  otrasMascotasComportamiento,
  porqueAdopta,
  sabeNecesidades,
  sabeGastos,
  sabeAlimentacion,
  tipoDeVivienda } = values;
  return (
    <>
      <Card style={{ marginTop: 100, textAlign: "left" }}>
        <Card.Body>
          <p>
            <strong>Nombre:</strong> { name }{" "}
          </p>
          <p>
            <strong>Email:</strong> {email}{" "}
          </p>
          <p>
            <strong>Dirección:</strong> { address }{" "}
          </p>
          <p>
            <strong>Dni:</strong> {dni}{" "}
          </p>
          <p>
            <strong>Código Postal:</strong> {postalCode}{" "}
          </p>
          <p>
            <strong>Ciudad:</strong> { city }{" "}
          </p>
          <p>
            <strong>Teléfono:</strong> { phone }{" "}
          </p>
          <p>
            <strong>Otras Mascotas:</strong> { otrasMascotas }{" "}
          </p>
          <p>
            <strong>Comportamiento Mascotas:</strong> { otrasMascotasComportamiento }{" "}
          </p>
          <p>
            <strong>¿Por qué adopta?:</strong> {  porqueAdopta }{" "}
          </p>
          <p>
            <strong>¿Sabe necesidades?:</strong> { sabeNecesidades }{" "}
          </p>
          <p>
            <strong>¿Sabe gastos?:</strong> {  sabeGastos }{" "}
          </p>
          <p>
            <strong>¿Sabe alimentación?:</strong> { sabeAlimentacion }{" "}
          </p>
          <p>
            <strong>Tipo de vivienda:</strong> { tipoDeVivienda }{" "}
          </p>
        </Card.Body>
      </Card>
    </>
  );
};

export default Final;
