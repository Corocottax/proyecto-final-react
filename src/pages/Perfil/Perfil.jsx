import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { JwtContext } from '../../shared/Contexts/JwtContext';
import "./Perfil.scss"

const Perfil = ({setNavbar}) => {

  const {jwt, setJwt} = useContext(JwtContext);
    let navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    const signOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setJwt(null);
        navigate("/");
    }

  setNavbar(true);

  return <div><button
  onClick={signOut}
>
  Sign out
</button></div>;
};

export default Perfil;
