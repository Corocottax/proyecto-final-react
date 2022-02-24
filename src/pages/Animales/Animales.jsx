import React from "react";
import "./Animales.scss";
import CustomPopup from "../../shared/PopUp/PopUp";
import { useState, useEffect } from "react";
import axios from "axios";
import Buscador from "../../shared/Buscador/Buscador";
import { generatePath, Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const Animales = ({ setNavbar }) => {
  const [texto, setTexto] = useState();

  // AXIOS
  const UrlAnimales = "https://proyecto-final-api.vercel.app/api/mascotas";

  const [mascotas, setMascotas] = useState([]);
  let filtroEspecie = "";
  let filtroSexo = "";
  let filtroTamaño = ""
  const arrayFiltros = [];
  const [showDetailPerro, setShowDetailPerro] = useState(false);
  const [showDetailGato, setShowDetailGato] = useState(false);
  const [showDetailConejo, setShowDetailConejo] = useState(false);
  const [showDetailCobaya, setShowDetailCobaya] = useState(false);
  const [showDetailPequeñoMamifero, setShowDetailPequeñoMamifero] =
    useState(false);
  const [showDetailHuron, setShowDetailHuron] = useState(false);
  const [showDetailPez, setShowDetailPez] = useState(false);
  const [showDetailReptil, setShowDetailReptil] = useState(false);
  const [showDetailAnfibio, setShowDetailAnfibio] = useState(false);
  const [showDetailAracnidoInsecto, setShowDetailAracnidoInsecto] =
    useState(false);
  const [showDetailAve, setShowDetailAve] = useState(false);

  const [showDetailHembra, setShowDetailHembra] = useState(false);
  const [showDetailMacho, setShowDetailMacho] = useState(false);

  const [showDetailPequeño, setShowDetailPequeño] = useState(false);
  const [showDetailMediano, setShowDetailMediano] = useState(false);
  const [showDetailGrande, setShowDetailGrande] = useState(false);

  setNavbar(true);

  // ESTO ES PARA EL POPUP
  const [visibility, setVisibility] = useState(false);
  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

  const filterEspecie = async (value) => {
    if (value === "perro") {
      setShowDetailPerro(!showDetailPerro);
      setShowDetailGato(false);
      setShowDetailConejo(false);
      setShowDetailCobaya(false);
      setShowDetailPequeñoMamifero(false);
      setShowDetailHuron(false);
      setShowDetailPez(false);
      setShowDetailReptil(false);
      setShowDetailAnfibio(false);
      setShowDetailAracnidoInsecto(false);
      setShowDetailAve(false);
    } else if (value === "gato") {
      setShowDetailGato(!showDetailGato);
      setShowDetailPerro(false);
      setShowDetailConejo(false);
      setShowDetailCobaya(false);
      setShowDetailPequeñoMamifero(false);
      setShowDetailHuron(false);
      setShowDetailPez(false);
      setShowDetailReptil(false);
      setShowDetailAnfibio(false);
      setShowDetailAracnidoInsecto(false);
      setShowDetailAve(false);
    } else if (value === "conejo") {
      setShowDetailConejo(!showDetailConejo);
      setShowDetailGato(false);
      setShowDetailPerro(false);
      setShowDetailCobaya(false);
      setShowDetailPequeñoMamifero(false);
      setShowDetailHuron(false);
      setShowDetailPez(false);
      setShowDetailReptil(false);
      setShowDetailAnfibio(false);
      setShowDetailAracnidoInsecto(false);
      setShowDetailAve(false);
    } else if (value === "cobaya") {
      setShowDetailCobaya(!showDetailCobaya);
      setShowDetailGato(false);
      setShowDetailPerro(false);
      setShowDetailConejo(false);
      setShowDetailPequeñoMamifero(false);
      setShowDetailHuron(false);
      setShowDetailPez(false);
      setShowDetailReptil(false);
      setShowDetailAnfibio(false);
      setShowDetailAracnidoInsecto(false);
      setShowDetailAve(false);
    } else if (value === "pequeñoMamifero") {
      setShowDetailPequeñoMamifero(!showDetailPequeñoMamifero);
      setShowDetailGato(false);
      setShowDetailPerro(false);
      setShowDetailConejo(false);
      setShowDetailCobaya(false);
      setShowDetailHuron(false);
      setShowDetailPez(false);
      setShowDetailReptil(false);
      setShowDetailAnfibio(false);
      setShowDetailAracnidoInsecto(false);
      setShowDetailAve(false);
    } else if (value === "huron") {
      setShowDetailHuron(!showDetailHuron);
      setShowDetailGato(false);
      setShowDetailPerro(false);
      setShowDetailConejo(false);
      setShowDetailPequeñoMamifero(false);
      setShowDetailCobaya(false);
      setShowDetailPez(false);
      setShowDetailReptil(false);
      setShowDetailAnfibio(false);
      setShowDetailAracnidoInsecto(false);
      setShowDetailAve(false);
    } else if (value === "pez") {
      setShowDetailPez(!showDetailPez);
      setShowDetailGato(false);
      setShowDetailPerro(false);
      setShowDetailConejo(false);
      setShowDetailPequeñoMamifero(false);
      setShowDetailHuron(false);
      setShowDetailCobaya(false);
      setShowDetailReptil(false);
      setShowDetailAnfibio(false);
      setShowDetailAracnidoInsecto(false);
      setShowDetailAve(false);
    } else if (value === "reptil") {
      setShowDetailReptil(!showDetailReptil);
      setShowDetailGato(false);
      setShowDetailPerro(false);
      setShowDetailConejo(false);
      setShowDetailPequeñoMamifero(false);
      setShowDetailHuron(false);
      setShowDetailPez(false);
      setShowDetailCobaya(false);
      setShowDetailAnfibio(false);
      setShowDetailAracnidoInsecto(false);
      setShowDetailAve(false);
    } else if (value === "anfibio") {
      setShowDetailAnfibio(!showDetailAnfibio);
      setShowDetailGato(false);
      setShowDetailPerro(false);
      setShowDetailConejo(false);
      setShowDetailPequeñoMamifero(false);
      setShowDetailHuron(false);
      setShowDetailPez(false);
      setShowDetailReptil(false);
      setShowDetailCobaya(false);
      setShowDetailAracnidoInsecto(false);
      setShowDetailAve(false);
    } else if (value === "aracnidoInsecto") {
      setShowDetailAracnidoInsecto(!showDetailAracnidoInsecto);
      setShowDetailGato(false);
      setShowDetailPerro(false);
      setShowDetailConejo(false);
      setShowDetailPequeñoMamifero(false);
      setShowDetailHuron(false);
      setShowDetailPez(false);
      setShowDetailReptil(false);
      setShowDetailAnfibio(false);
      setShowDetailCobaya(false);
      setShowDetailAve(false);
    } else if (value === "ave") {
      setShowDetailAve(!showDetailAve);
      setShowDetailGato(false);
      setShowDetailPerro(false);
      setShowDetailConejo(false);
      setShowDetailPequeñoMamifero(false);
      setShowDetailHuron(false);
      setShowDetailPez(false);
      setShowDetailReptil(false);
      setShowDetailAnfibio(false);
      setShowDetailAracnidoInsecto(false);
      setShowDetailCobaya(false);
    }

    filtroEspecie = value;

    const arrayFiltrados = [];

    await axios(UrlAnimales).then((res) => {
      const animales = res.data;
      for (const animal of animales) {
        if (animal.especie === filtroEspecie) {
          arrayFiltrados.push(animal);
        }
      }
    });
    setMascotas(arrayFiltrados);
    console.log("mascotas", mascotas);
  };
  const filterSexo = async (value) => {
    if (value === "hembra") {
      setShowDetailHembra(!showDetailHembra);
      setShowDetailMacho(false);
    } else if (value === "macho") {
      setShowDetailMacho(!showDetailMacho);
      setShowDetailHembra(false);
    }
    filtroSexo = value;

    const arrayFiltrados = [];

    await axios(UrlAnimales).then((res) => {
      const animales = res.data;
      for (const animal of animales) {
        if (animal.sexo === filtroSexo) {
          arrayFiltrados.push(animal);
        }
      }
    });
    setMascotas(arrayFiltrados);
    console.log("sexo", mascotas);
  };
  const filterTamaño = async (value) => {
    if (value === "pequeño"){
      setShowDetailPequeño(!showDetailPequeño);
      setShowDetailMediano(false);
      setShowDetailGrande(false);
    } else if (value === "mediano"){
      setShowDetailMediano(!showDetailMediano);
      setShowDetailPequeño(false);
      setShowDetailGrande(false);
    } else if (value === "grande"){
      setShowDetailGrande(!showDetailGrande);
      setShowDetailPequeño(false);
      setShowDetailMediano(false);
    }
    filtroTamaño = value;

    const arrayFiltrados = [];

    await axios(UrlAnimales).then((res) => {
      const animales = res.data;
      for (const animal of animales) {
        if (animal.tamaño === filtroTamaño) {
          arrayFiltrados.push(animal);
        }
      }
    });
    setMascotas(arrayFiltrados);
    console.log("sexo", mascotas);
  }
  const filterCiudad = async () => {
    let arrayFiltrados = [];
    let ciudad = document.getElementById("ciudad").value;
    console.log("dom", ciudad);

    await axios(UrlAnimales).then((res) => {
      const animales = res.data;

      if (ciudad !== "") {
        for (const animal of animales) {
          console.log("for", animal.localizacion);
          if (animal.localizacion === ciudad) {
            console.log("if", animal.localizacion);
            arrayFiltrados.push(animal);
          }
        }
      } else {
        arrayFiltrados = [...animales];
      }
    });
    setMascotas(arrayFiltrados);
    console.log("ciudades", mascotas);
  };

  const filterEdad = async () => {
    let arrayFiltrados = [];
    let edad = document.getElementById("edad").value;
    console.log("dom", edad);

    await axios(UrlAnimales).then((res) => {
      const animales = res.data;

      if (edad !== "") {
        for (const animal of animales) {
          console.log("for", animal.edad);
          if (animal.edad === edad) {
            console.log("if", animal.edad);
            arrayFiltrados.push(animal);
          }
        }
      } else {
        arrayFiltrados = [...animales];
      }
    });
    setMascotas(arrayFiltrados);
    console.log("edad", mascotas);
  };

  useEffect(() => {
    setTexto("");
    axios(UrlAnimales).then((res) => {
      setMascotas(res.data);
    });
  }, []);

  return (
    <div>
      <div className="header">
        <Link to="/home" className="volver">
          <img
            className="imgHeader"
            src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644422043/proyecto%20final/atras_3x_druibb.png"
            alt="flechita"
          />
        </Link>

        <Buscador texto={texto} setTexto={setTexto} />

        {/* -----------------------BOTON Y POPUP PARA EL FILTRO-------------------------- */}
        <img
          onClick={(e) => setVisibility(!visibility)}
          className="imgfiltros"
          src="https://res.cloudinary.com/dhp2zuftj/image/upload/v1644422043/proyecto%20final/filtros_3x_etqcy3.png"
          alt="filtrado"
        />
      </div>

      <CustomPopup
        className="filters-popup"
        onClose={popupCloseHandler}
        show={visibility}
      >
        <div className="popup-filter2">
          <h2>Filtros</h2>

          <div className="popup-filter--ciudad">
            <h3>Ciudad</h3>

            <select name="select" id="ciudad" onChange={() => filterCiudad()}>
              <option value="" selected>
                Elige tu zona
              </option>
              <option value="Madrid">Madrid</option>
              <option value="Albacete">Albacete</option>
            </select>
          </div>

          <div className="popup-filter--especie">
            <h3>Especie</h3>
            <div className="popup-filter--especieButtons">
              <button
                class="button"
                className={
                  showDetailPerro === true
                    ? "detail-btn__seleccionado"
                    : "detail-btn__noSeleccionado"
                }
                onClick={() => filterEspecie("perro")}
              >
                <img
                  src="https://res.cloudinary.com/dbamkolrf/image/upload/v1644482297/iconos%20protectora/perrop_ewpdvd.png"
                  alt="logo perro"
                />
                <p className="text">Perro</p>
              </button>
              <button
                class="button"
                className={
                  showDetailGato === true
                    ? "detail-btn__seleccionado"
                    : "detail-btn__noSeleccionado"
                }
                onClick={() => filterEspecie("gato")}
              >
                <img
                  src="https://res.cloudinary.com/dbamkolrf/image/upload/v1644482297/iconos%20protectora/cat_cxspoi.png"
                  alt="logo Gato"
                />
                <p className="text">Gato</p>
              </button>
              <button
                class="button"
                className={
                  showDetailConejo === true
                    ? "detail-btn__seleccionado"
                    : "detail-btn__noSeleccionado"
                }
                onClick={() => filterEspecie("conejo")}
              >
                <img
                  src="https://res.cloudinary.com/dbamkolrf/image/upload/v1644482299/iconos%20protectora/group12_e2ogox.png"
                  alt="logo Conejo"
                />
                <p className="text">Conejo</p>
              </button>
              <button
                class="button"
                className={
                  showDetailCobaya === true
                    ? "detail-btn__seleccionado"
                    : "detail-btn__noSeleccionado"
                }
                onClick={() => filterEspecie("cobaya")}
              >
                <img
                  src="https://res.cloudinary.com/dbamkolrf/image/upload/v1644482297/iconos%20protectora/067Hamster_jj8jq1.png"
                  alt="logo Cobaya"
                />
                <p className="text">Cobaya</p>
              </button>
              <button
                class="button"
                className={
                  showDetailPequeñoMamifero === true
                    ? "detail-btn__seleccionado"
                    : "detail-btn__noSeleccionado"
                }
                onClick={() => filterEspecie("pequeñoMamifero")}
              >
                <img
                  src="https://res.cloudinary.com/dbamkolrf/image/upload/v1644482297/iconos%20protectora/035CoatiCopy_dyhwh5.png"
                  alt="logo Pequeño mamífero"
                />
                <p className="text">Pequeño mamífero</p>
              </button>
              <button
                class="button"
                className={
                  showDetailHuron === true
                    ? "detail-btn__seleccionado"
                    : "detail-btn__noSeleccionado"
                }
                onClick={() => filterEspecie("huron")}
              >
                <img
                  src="https://res.cloudinary.com/dbamkolrf/image/upload/v1644482298/iconos%20protectora/group6_dxwxx6.png"
                  alt="logo Hurón"
                />
                <p className="text">Hurón</p>
              </button>
              <button
                class="button"
                className={
                  showDetailPez === true
                    ? "detail-btn__seleccionado"
                    : "detail-btn__noSeleccionado"
                }
                onClick={() => filterEspecie("pez")}
              >
                <img
                  src="https://res.cloudinary.com/dbamkolrf/image/upload/v1644482297/iconos%20protectora/057Fish2_rcvzga.png"
                  alt="logo Pez"
                />
                <p className="text">Pez</p>
              </button>
              <button
                class="button"
                className={
                  showDetailReptil === true
                    ? "detail-btn__seleccionado"
                    : "detail-btn__noSeleccionado"
                }
                onClick={() => filterEspecie("reptil")}
              >
                <img
                  src="https://res.cloudinary.com/dbamkolrf/image/upload/v1644482299/iconos%20protectora/group8_xn6wnm.png"
                  alt="logo Reptil"
                />
                <p className="text">Reptil</p>
              </button>
              <button
                class="button"
                className={
                  showDetailAnfibio === true
                    ? "detail-btn__seleccionado"
                    : "detail-btn__noSeleccionado"
                }
                onClick={() => filterEspecie("anfibio")}
              >
                <img
                  src="https://res.cloudinary.com/dbamkolrf/image/upload/v1644482298/iconos%20protectora/anfibio_auuz2o.png"
                  alt="logo Anfibio"
                />
                <p className="text">Anfibio</p>
              </button>
              <button
                class="button"
                className={
                  showDetailAracnidoInsecto === true
                    ? "detail-btn__seleccionado"
                    : "detail-btn__noSeleccionado"
                }
                onClick={() => filterEspecie("aracnidoInsecto")}
              >
                <img
                  src="https://res.cloudinary.com/dbamkolrf/image/upload/v1644482297/iconos%20protectora/perrop_ewpdvd.png"
                  alt="logo Arácnido o insecto"
                />
                <p className="text">Arácnido o insecto</p>
              </button>
              <button
                class="button"
                className={
                  showDetailAve === true
                    ? "detail-btn__seleccionado"
                    : "detail-btn__noSeleccionado"
                }
                onClick={() => filterEspecie("ave")}
              >
                <img
                  src="https://res.cloudinary.com/dbamkolrf/image/upload/v1644482297/iconos%20protectora/ave_zyp0z5.png"
                  alt="logo Ave"
                />
                <p className="text">Ave</p>
              </button>
            </div>
          </div>

          <div className="popup-filter--edad">
            <h3>Edad</h3>

            <select name="select" id="edad" onChange={() => filterEdad()}>
              <option value="" selected>
                Elige la edad
              </option>
              <option value="Joven">Joven</option>
              <option value="Mayor">Mayor</option>
            </select>
          </div>

          <div className="popup-filter--sexo">
            <h3>Sexo</h3>
            <div className="popup-filter--sex">
              <button
                class="button"
                className={
                  showDetailHembra === true
                    ? "detail-btn__seleccionado"
                    : "detail-btn__noSeleccionado"
                }
                onClick={() => filterSexo("hembra")}
              >
                <img
                  src="https://res.cloudinary.com/dbamkolrf/image/upload/v1644482298/iconos%20protectora/female_leu70o.png"
                  alt="Hembra"
                />
                <p>Hembra</p>
              </button>
              <button
                class="button"
                className={
                  showDetailMacho === true
                    ? "detail-btn__seleccionado"
                    : "detail-btn__noSeleccionado"
                }
                onClick={() => filterSexo("macho")}
              >
                <img
                  src="https://res.cloudinary.com/dbamkolrf/image/upload/v1644482299/iconos%20protectora/male_eloz8z.png"
                  alt="macho"
                />
                <p>Macho</p>
              </button>
            </div>
          </div>

          <div className="popup-filter--tamaño">
            <h3>Tamaño</h3>
            <div className="popup-filter--sizes">
              <button class="button"
              className={
                  showDetailPequeño === true
                    ? "detail-btn__seleccionado"
                    : "detail-btn__noSeleccionado"
                }
                onClick={() => filterTamaño("pequeño")}>
                <img
                  src="https://res.cloudinary.com/dbamkolrf/image/upload/v1644482299/iconos%20protectora/groupCopy_rrbgfu.png"
                  alt="pequeño"
                />
                <p>Pequeño</p>
              </button>
              <button class="button"
              className={
                  showDetailMediano === true
                    ? "detail-btn__seleccionado"
                    : "detail-btn__noSeleccionado"
                }
                onClick={() => filterTamaño("mediano")}>
                <img
                  src="https://res.cloudinary.com/dbamkolrf/image/upload/v1644482299/iconos%20protectora/groupCopy_rrbgfu.png"
                  alt="mediano"
                />
                <p>Mediano</p>
              </button>
              <button class="button"
              className={
                  showDetailGrande === true
                    ? "detail-btn__seleccionado"
                    : "detail-btn__noSeleccionado"
                }
                onClick={() => filterTamaño("grande")}>
                <img
                  src="https://res.cloudinary.com/dbamkolrf/image/upload/v1644482299/iconos%20protectora/groupCopy2_sseggh.png"
                  alt="grande"
                />
                <p>Grande</p>
              </button>
            </div>
          </div>
        </div>
      </CustomPopup>

      <div className="album">
        {mascotas &&
          mascotas.map((mascota, index) => {
            if (mascota.nombre.toLowerCase().includes(texto)) {
              return (
                <Fade className="carta" key={index} delay={200} triggerOnce>
                  <Link
                    className="Link"
                    to={generatePath("/adopciones/:id", { id: mascota._id })}
                  >
                    <div key={index}>
                      <img
                        className="imagen-carta"
                        src={mascota.foto}
                        alt={mascota.nombre}
                      />
                      <div className="carta-detail">
                        <h2 className="nombre-carta">{mascota.nombre}</h2>
                        <p className="localidad-carta">
                          {mascota.localizacion}
                        </p>
                      </div>
                    </div>
                  </Link>
                </Fade>
              );
            } else {
              return null;
            }
          })}
      </div>
    </div>
  );
};

export default Animales;
