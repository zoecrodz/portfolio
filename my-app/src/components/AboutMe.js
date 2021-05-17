import React from "react";
import style from "../styles/aboutme.module.css";

const AboutMe = ({ english }) => {
  return (
    <div id={"about"} className={style.container}>
      <img src={process.env.PUBLIC_URL + "/plants2.png"}></img>
      {english ? (
        <div>
          <span>
            The technology world changed my life completely. I started studying
            a Frontend Introduction course when I found some topics that were
            unknown to me, such as my passion for teamwork, the constant
            challenges and learning new things by my own just using the
            Internet. This is what made me decide that I want to be a
            professional Web Developer, the humanity and creativity that
            technology brings.
          </span>
          <br />
          <span>
            While I work as a freelance I am looking for my first full-time job
            as a developer, which is what I am so passionate about and where I
            see myself forever.
            <br />
            My ideal work space would be a place that is committed to the growth
            of its programmers and where teamwork is the key to productivity.
          </span>
        </div>
      ) : (
        <div>
          <span>
            Entrar al mundo de la tecnología me hizo dar un giro muy importante
            en mi vida. Comencé estudiando en un curso de Introducción al
            Frontend y me encontré con muchos puntos desconocidos para mí, como
            la pasión por el trabajo en equipo, los desafíos constantes y
            aprender cosas por mis propios medios usando sólo Internet. Esto es
            lo que me hizo decidir que quiero dedicarme al desarrollo web, todo
            lo humano y creativo que trae la tecnología.
          </span>
          <br />
          <span>
            Mientras hago trabajos freelance busco mi primer oportunidad de
            trabajo full-time como desarrolladora, que es lo que me apasiona
            tanto y donde me veo para siempre.
            <br />
            Mi espacio ideal para ser parte sería un lugar que apuesta por el
            crecimiento de sus programadores y donde el trabajo en equipo sea la
            clave de la productividad.
          </span>
        </div>
      )}
    </div>
  );
};

export default AboutMe;
