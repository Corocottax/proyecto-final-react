import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import PreLogin from "./pages/PreLogin/PreLogin"
import Login from "./pages/Login/Login"
import Home from "./pages/Home/Home"
import Animales from "./pages/Animales/Animales"
import Perfil from "./pages/Perfil/Perfil"
import DetalleAnimales from "./pages/DetalleAnimales/DetalleAnimales"
import FormularioAdopcion from "./pages/FormularioAdopcion/FormularioAdopcion"
import EstadoAdopcion from "./pages/EstadoAdopcion/EstadoAdopcion"
import Mapas from "./pages/Mapas/Mapas"
import Registro from "./pages/Registro/Registro"
import Navbar from './shared/Navbar/Navbar';
import Opciones from './pages/Opciones/Opciones';
import { JwtContext } from './shared/Contexts/JwtContext';
import { useState } from 'react';
import NoticiasDetail from './pages/Home/NoticiasDetail/NoticiasDetail';

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
          <Route path="logIn" element={<Login setNavbar={setNavbar}/>}/>
          <Route path="registro" element={<Registro setNavbar={setNavbar}/>}/>
          <Route path="home" element={<Home setNavbar={setNavbar}/>}/>
          <Route path="home/:id" element={<NoticiasDetail setNavbar={setNavbar}/>}/>
          <Route path="adopciones" element={<Animales setNavbar={setNavbar}/>}/>
          <Route path="adopciones/:id" element={<DetalleAnimales setNavbar={setNavbar}/>}/>
          <Route path="formularioAdopcion" element={<FormularioAdopcion setNavbar={setNavbar}/>}/>
          <Route path="perfil" element={<Perfil setNavbar={setNavbar}/>}/>
          <Route path="perfil/estados" element={<EstadoAdopcion setNavbar={setNavbar}/>}/>
          <Route path="mapa" element={<Mapas setNavbar={setNavbar}/>}/>
          <Route path="opciones" element={<Opciones setNavbar={setNavbar}/>}/>
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