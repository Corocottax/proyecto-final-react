import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Inicio from "./pages/Inicio/Inicio"
import Login from "./pages/Login/Login"
import Home from "./pages/Home/Home"
import Animales from "./pages/Animales/Animales"
import Perfil from "./pages/Perfil/Perfil"
import DetalleAnimales from "./pages/DetalleAnimales/DetalleAnimales"
import FormularioAdopcion from "./pages/FormularioAdopcion/FormularioAdopcion"
import EstadoAdopcion from "./pages/EstadoAdopcion/EstadoAdopcion"
import Mapas from "./pages/Mapas/Mapas"
import Registro from "./pages/Registro/Registro"

function App() {

  

  return (
    <div className="App">
    
    <BrowserRouter>

      <Routes>

        <Route path="/">

          <Route index element={<Inicio/>}/>
          <Route path="logIn" element={<Login/>}/>
          <Route path="registro" element={<Registro/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="adopciones" element={<Animales/>}/>
          <Route path="adopciones/:id" element={<DetalleAnimales/>}/>
          <Route path="formularioAdopcion" element={<FormularioAdopcion/>}/>
          <Route path="perfil" element={<Perfil/>}/>
          <Route path="perfil/estados" element={<EstadoAdopcion/>}/>
          <Route path="mapa" element={<Mapas/>}/>
          <Route path="*" element={<Inicio/>}/>

        </Route>

      </Routes>

    </BrowserRouter>

    </div>
  );
}

export default App;