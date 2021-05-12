import React from 'react';
import style from '../styles/aboutme.module.css'

const AboutMe = () => {
    return (
        <div id={'about'}className={style.container}>
             <img src={process.env.PUBLIC_URL + '/plants2.png'}></img>
             <div>

            <span>Entrar al mundo de la tecnología me hizo dar un giro muy importante en mi vida. Comencé estudiando en un curso de Introducción al Frontend y me encontré con muchas cosas desconocidas para mí, como la frustración al no poder resolver algo, el trabajo en equipo, pedir ayuda, y aprender cosas por mis propios medios usando sólo Internet. Esto es lo que me hizo decidir que quiero dedicarme al desarrollo web, todo lo humano y creativo que trae la tecnología.</span>
            <br />
            <span>Mientras hago trabajos freelance busco mi primer oportunidad de trabajo full-time como desarrolladora, que es lo que me apasiona tanto y donde me veo para siempre. 
                <br/>
                Mi espacio ideal del que quiero ser parte sería un lugar que apuesta por el crecimiento de sus programadores y donde el trabajo en equipo sea la clave de la productividad.
            </span>
             </div>
        </div>
    );
};

export default AboutMe;