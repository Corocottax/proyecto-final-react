import React from "react";
import { useForm } from "react-hook-form";
import { API } from "../../shared/Services/Api";
import "./Registro.scss";

const Registro = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (formData) => {
    API.post("register", formData).then((res) => {
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
      <input name="password" id="password" type="password" {...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,})}/>

      <label htmlFor="age">Edad</label>
      <input name="age" id="age" type="number" {...register("age")}/>

      <label htmlFor="photo">Foto</label>
      <input name="photo" id="photo" type="file" alt="login" src="https://ceslava.s3-accelerate.amazonaws.com/2016/04/mistery-man-gravatar-wordpress-avatar-persona-misteriosa-510x510.png" {...register("photo")}/>

      <input type="submit" value="Register"/>
    </form>
  );
};

export default Registro;
