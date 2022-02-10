import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../../shared/Contexts/JwtContext";
import { API } from "../../shared/Services/Api";
import "./Login.scss";

const Login = ({setNavbar}) => {

    /* const addToFav = (cafe) => {
        console.log(cafe)
        fetch(`http://localhost:3000/favorites?user_id=${user_id}`,{
          method: "POST",
          headers: { 
            "Content-Type" : "application/json",
            Accept: "application/json",
            Authorization: `bearer ${localStorage.token}`
          },
            body: JSON.stringify( cafe )
        })
        .then(res => res.json())
        .then(console.log)
        } */


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
    <button className="container-login">
      
    </button>
  );
};
export default Login;
