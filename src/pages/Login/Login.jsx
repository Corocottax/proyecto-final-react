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
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        placeholder="ejemplo@ejemplo.com"
        {...register("email", {
          required: true,
          pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        })}
      />
      <label htmlFor="password">Contraseña</label>
      <input
        id="password"
        type={passwordShown ? "text" : "password"}
        placeholder="contraseña"
        {...register("password", {
          required: true,
          pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/
        })}
      />
      <img onClick={togglePassword} src="" alt=""/>

      <input type="submit" value="Login" />
    </form>
  );
};
export default Login;
