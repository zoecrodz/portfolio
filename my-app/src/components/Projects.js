import React from "react";
import style from "../styles/projects.module.css";
import {Link} from "react-router-dom"

const Projects = () => {
  return (
    <div id={'projects'}className={style.main}>
      <div className={style.container}>
      <br/>
        <br/>
        <h1>Proyectos</h1>
        <br/>
        <br/>
        <div className={style.children}>
          <div onClick={()=> {
            window.open('https://github.com/zoecrodz/birrapp', '_blanck')
          }}className={style.child}>
            <img src={process.env.PUBLIC_URL + "/birrappp.jpg"}></img>
            <span>Ecommerce para bares que posibilita la visualización del menú y el pago del pedido</span>
          </div>
          <div onClick={()=> {
            window.open('https://github.com/zoecrodz/medussa', '_blanck')
          }}className={style.child}>
            <img src={process.env.PUBLIC_URL + "/medussa.jpg"}></img>
            <span>Ecommerce para emprendimiento de textiles integrado a MercadoPago</span>
          </div>
          <div onClick={()=> {
            window.open('https://github.com/zoecrodz/navent', '_blanck')
          }}className={style.child}>
            <img src={process.env.PUBLIC_URL + "/bumeran.jpg"}></img>
            <span>Pasantía integrando test automático para validar habilidades que el usuario carga a su CV</span>
          </div>
        </div>
      </div>
      {/* <img src={process.env.PUBLIC_URL + "/plants3.png"}></img> */}
    </div>
  );
};

export default Projects;
