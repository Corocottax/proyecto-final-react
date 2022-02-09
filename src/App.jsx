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
import Splash from './shared/Splash/Splash';

function App() {
  const [jwt, setJwt] = useState(localStorage.getItem('token') || null);
  

  return (
    <JwtContext.Provider value={{ jwt, setJwt }}>
    <div className="App">
    
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<PreLogin/>}/>
          <Route path="logIn" element={<Login/>}/>
          <Route path="registro" element={<Registro/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="adopciones" element={<Animales/>}/>
          <Route path="adopciones/:id" element={<DetalleAnimales/>}/>
          <Route path="formularioAdopcion" element={<FormularioAdopcion/>}/>
          <Route path="perfil" element={<Perfil/>}/>
          <Route path="perfil/estados" element={<EstadoAdopcion/>}/>
          <Route path="mapa" element={<Mapas/>}/>
          <Route path="opciones" element={<Opciones/>}/>
          <Route path="*" element={<PreLogin/>}/>
        </Route>
      </Routes>
      <Navbar />
    </BrowserRouter>
    </div>
    </JwtContext.Provider>
  );
}

export default App;