import React, { useState } from "react";
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
  

  
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('age', data.age);
    formData.append('photo', data.photo[0]);
    console.log(data);
    API.post("api/users/", formData).then((res) => {
      console.log("Register user");
      if (res) {
        navigate("/login")
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input id="name" placeholder="Pedro Garcia Nieto"{...register("name", { required: true })}/>

      <input id="email" placeholder="ejemplo@ejemplo.com" {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,})}/>

      <div>
        <input name="password" id="password" type={passwordShown ? "text" : "password"} {...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/})}/>
        <img onClick={togglePassword} src="" alt="" />
      </div>

      <input name="age" id="age" type="number" {...register("age")}/>

      <label htmlFor="photo">Foto</label>
      <input name="photo" id="photo" type="file"  alt="login" {...register("photo")}/>

      <input type="submit" value="Register"/>
    </form>
  );
};

export default Registro;
