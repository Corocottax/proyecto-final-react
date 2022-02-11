import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import PreLogin from "./pages/PreLogin/PreLogin"
import Login from "./pages/Login/Login"
import Home from "./pages/Home/Home"
import Animales from "./pages/Animales/Animales"
import Perfil from "./pages/Perfil/Perfil"
import DetalleAnimales from "./pages/DetalleAnimales/DetalleAnimales"
import FormularioAdopcion from "./pages/FormularioAdopcion/FormularioAdopcion"
import FormularioAdopcion2 from "./pages/FormularioAdopcion/components/FormularioAdopcion2"
import FormularioAdopcion3 from "./pages/FormularioAdopcion/components/FormularioAdopcion3"
import EstadoAdopcion from "./pages/EstadoAdopcion/EstadoAdopcion"
import Mapas from "./pages/Mapas/Mapas"
import Registro from "./pages/Registro/Registro"
import Navbar from './shared/Navbar/Navbar';
import Opciones from './pages/Opciones/Opciones';
import { JwtContext } from './shared/Contexts/JwtContext';
import { useState } from 'react';
import NoticiasDetail from './pages/Home/NoticiasDetail/NoticiasDetail';
import RequireAuth from './shared/RequireAuth/RequireAuth';
import PreLoginBotones from './pages/PreLogin/PreLoginBotones/PreLoginBotones';


function App() {
  const [jwt, setJwt] = useState(localStorage.getItem('token') || null);
  const [navbar, setNavbar] = useState(true);

  return (
    <JwtContext.Provider value={{ jwt, setJwt }}>
    <div className="App">
    
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<PreLogin setNavbar={setNavbar}/>}/>
          <Route path="inicio" element={<PreLoginBotones setNavbar={setNavbar}/>}/>
          <Route path="logIn" element={<Login setNavbar={setNavbar}/>}/>
          <Route path="registro" element={<Registro setNavbar={setNavbar}/>}/>
          <Route path="home" element={<RequireAuth><Home setNavbar={setNavbar}/></RequireAuth>}/>
          <Route path="home/:id" element={<RequireAuth><NoticiasDetail setNavbar={setNavbar}/></RequireAuth>}/>
          <Route path="adopciones" element={<RequireAuth><Animales setNavbar={setNavbar}/></RequireAuth>}/>
          <Route path="adopciones/:id" element={<RequireAuth><DetalleAnimales setNavbar={setNavbar}/></RequireAuth>}/>
          <Route path="formularioAdopcion" element={<RequireAuth><FormularioAdopcion setNavbar={setNavbar}/></RequireAuth>}/>
          <Route path="formularioAdopcion2" element={<RequireAuth><FormularioAdopcion2 setNavbar={setNavbar}/></RequireAuth>}/>
          <Route path="formularioAdopcion3" element={<RequireAuth><FormularioAdopcion3 setNavbar={setNavbar}/></RequireAuth>}/>
          <Route path="perfil" element={<RequireAuth><Perfil setNavbar={setNavbar}/></RequireAuth>}/>
          <Route path="estados" element={<RequireAuth><EstadoAdopcion setNavbar={setNavbar}/></RequireAuth>}/>
          <Route path="mapa" element={<RequireAuth><Mapas setNavbar={setNavbar}/></RequireAuth>}/>
          <Route path="opciones" element={<RequireAuth><Opciones setNavbar={setNavbar}/></RequireAuth>}/>
          <Route path="*" element={<PreLogin setNavbar={setNavbar}/>}/>
        </Route>
      </Routes>

      {navbar && <Navbar />}
      
    </BrowserRouter>
    </div>
    </JwtContext.Provider>
  );
}

export default App;