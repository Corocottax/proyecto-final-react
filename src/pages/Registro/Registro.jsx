import React, { useState } from "react";
import { Bounce, Fade } from "react-awesome-reveal";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API } from "../../shared/Services/Api";
import "./Registro.scss";

const Registro = ({setNavbar}) => {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  setNavbar(false);

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const [passwordShown2, setPasswordShown2] = useState(false);
  const togglePassword2 = () => {
    setPasswordShown2(!passwordShown2);
  };
  
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('age', data.age);
    formData.append('photo', data.photo[0]);
    formData.append('adresses', data.adresses);
    console.log(data);
    API.post("api/users/", formData).then((res) => {
      console.log("Register user");
      if (res) {
        navigate("/login")
      }
    });
  };

  const [image, setImage] = useState(null)

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      console.log(image);
    }
  }

  return (
    <div className="registro">
      <div className="hero">
        <Bounce>
          <img
            src="https://res.cloudinary.com/ddbvk5mrr/image/upload/v1644320679/App-Pet/logo_hyfwge.png"
            alt="logo"
          />
        </Bounce>
        <Fade delay={1000} triggerOnce>
          <img
            src="https://res.cloudinary.com/ddbvk5mrr/image/upload/v1644320680/App-Pet/title_u1r9rk.png"
            alt="title"
          />
        </Fade>
      </div>
      <div>
        <h3 className="titulo">¡Hola! si es la primera vez que entras registrate y podrás disfrutar de nuestra app</h3>
      </div>
      <form className="formChulo" onSubmit={handleSubmit(onSubmit)}>

        <input className="inputChulo" id="name" placeholder="Nombre"{...register("name", { required: true })}/>

        <input className="inputChulo" id="email" placeholder="Email" {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,})}/>

        <div className="input-contraseña">
          <input className="inputChuloContraseña" placeholder="Contraseña" name="password" id="password" type={passwordShown ? "text" : "password"}  {...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/})}/>
          <img onClick={togglePassword} src="/images/mostrar.png" alt="ojo mostrar"/>
        </div>

        <div className="input-contraseña">
          <input className="inputChuloContraseña" placeholder="Confirmar contraseña" name="password2" id="password2" type={passwordShown2 ? "text" : "password"}  {...register("password2", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/})}/>
          <img onClick={togglePassword2} src="/images/mostrar.png" alt="ojo mostrar"/>
        </div>

        <input className="inputChulo" placeholder="Edad" name="age" id="age" type="number" {...register("age")}/>

        <input className="inputChulo" placeholder="Dirección" name="adresses" id="adresses" {...register("adresses")}/>

        {image ? <img className="imagen-fotoPerfil" src={image} alt="foto de perfil"/> : <></>}

        <div className="inputGuapo">
          <input className="inputfile inputfile-1" onInput={onImageChange} name="photo" id="photo" type="file" alt="login" {...register("photo")}/>        
          <label for="photo">
            <img className="nube" src="https://byspel.com/wp-content/uploads/2017/01/upload-cloud.png" alt="subir archivo" /> 
            <span className="fotoPerfilName">Foto de perfil</span>
          </label>
        </div>

      <input className="botonEnviar" type="submit" value="Registrarse"/>

      </form>
    </div>
  );
};

export default Registro;
