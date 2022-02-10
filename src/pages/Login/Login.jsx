import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../../shared/Contexts/JwtContext";
import { API } from "../../shared/Services/Api";
import "./Login.scss";

const Login = ({setNavbar}) => {
  const { register, handleSubmit } = useForm();
  const { setJwt } = useContext(JwtContext);
  let navigate = useNavigate();
  setNavbar(false);

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const onSubmit = (formData) => {
    API.post("api/users/login", formData).then((res) => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.userDB));
      setJwt(res.data.token);
      if (res.data.token) {
        navigate("/home")
      }
    });
  };

  return (
    <div className="container-login">
      <div className="contain-logo">
      <img className="logo-lucky" src="/images/logorow.png" alt="perro lucky" />
      <h3 className="title-login">¡Hola! para continuar, inicia sesión o crea una cuenta</h3>
      </div>
    <form className="form-contain"onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email"></label>
      <input id="email" placeholder="ejemplo@ejemplo.com"{...register("email", {
          required: true,
          pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        })}
      />
      <label htmlFor="password"></label>
      <input id="password" type={passwordShown ? "text" : "password"} placeholder="contraseña"{...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/})}/>
      <img onClick={togglePassword} src="/images/mostrar.png" alt="ojo mostrar"/>
        <a href="">¿Has olvidado tu contraseña?</a>

      <input className="submit-1"type="submit" value="Iniciar sesión" />
      <input className="submit-2"type="submit" value="Crear cuenta" />
    </form>
    </div>
  );
};
export default Login;
