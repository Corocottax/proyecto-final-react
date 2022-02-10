import React from "react";
import { useForm } from "react-hook-form";
import { API } from "../../shared/Services/Api";
import "./Registro.scss";

const Registro = ({setNavbar}) => {
  const { register, handleSubmit } = useForm();
  setNavbar(false);

  const onSubmit = (formData) => {
    console.log(formData);
    API.post("api/users/", formData).then((res) => {
      console.log("Register user");
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Nombre</label>
      <input id="name" placeholder="Pedro Garcia Nieto"{...register("name", { required: true })}/>

      <label htmlFor="email">Email</label>
      <input id="email" placeholder="ejemplo@ejemplo.com" {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,})}/>

      <label htmlFor="password">Contraseña</label>
      <input name="password" id="password" type="password" {...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/})}/>

      <label htmlFor="age">Edad</label>
      <input name="age" id="age" type="number" {...register("age")}/>

      <label htmlFor="photo">Foto</label>
      <input name="photo" id="photo" type="file" alt="login" {...register("photo")}/>

      <input type="submit" value="Register"/>
    </form>
  );
};

export default Registro;
