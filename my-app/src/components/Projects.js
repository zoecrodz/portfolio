import React from "react";
import style from "../styles/projects.module.css";
import {Link} from "react-router-dom"

const Projects = ({english}) => {

// const spanishSpan = {
//   0: 
// }


  return (
    <div id={'projects'}className={style.main}>
      <div className={style.container}>
      <br/>
        <br/>
        {english ? (
          <h1>Projects</h1>
        ) : (
          <h1>Proyectos</h1>
        )}
        <br/>
        <br/>
        <div className={style.children}>
          <div onClick={()=> {
            window.open('https://github.com/zoecrodz/birrapp', '_blanck')
          }}className={style.child}>
            <img src={process.env.PUBLIC_URL + "/birrappp.jpg"}></img>
            {english ? (
              <span>Pub's ecommerce that enables menu visualization and purchase payment</span>
            ) : (
              <span>Ecommerce para bares que posibilita la visualización del menú y el pago del pedido</span>
            )}
          </div>
          <div onClick={()=> {
            window.open('https://github.com/zoecrodz/medussa', '_blanck')
          }}className={style.child}>
            <img src={process.env.PUBLIC_URL + "/medussa.jpg"}></img>
            {english ? (
              <span>Underware ecommerce integrated to MercadoPago</span>
            ) : (
              <span>Ecommerce para emprendimiento de textiles integrado a MercadoPago</span>
            )}
          </div>
          <div onClick={()=> {
            window.open('https://github.com/zoecrodz/navent', '_blanck')
          }}className={style.child}>
            <img src={process.env.PUBLIC_URL + "/bumeran.jpg"}></img>
            {english ? (
              <span>Intership integrating automatic test to validate user's skills for an employment website</span>
            ) : (
              <span>Pasantía integrando test automático para validar habilidades que el usuario carga a su CV</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
