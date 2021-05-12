import React from 'react';
import style from '../styles/aboutme.module.css'

const AboutMe = () => {
    return (
        <div id={'about'}className={style.container}>
             <img src={process.env.PUBLIC_URL + '/plants2.png'}></img>
             <div>

            <span>Al pie de la penúltima torre fue que el poeta (que estaba como ajeno a los espectáculos que eran maravilla de todos) recitó la breve composición que hoy vinculamos indisolublemente a su nombre y que, según repiten los historiadores más elegantes, le deparó la inmortalidad y la muerte. El texto se ha perdido; hay quien entiende que constaba de un verso; otros, de una sola palabra. Lo cierto, lo increíble, es que en el poema estaba entero y minucioso el palacio enorme, con cada ilustre porcelana y cada dibujo en cada porcelana y las penumbras y las luces de los crepúsculos y cada instante desdichado o feliz de las gloriosas dinastías de mortales, de dioses y de dragones que habitaron en él desde el interminable pasado. Todos callaron, pero el Emperador, exclamó: ¡Me has arrebatado el palacio! y la espada de hierro del verdugo segó la vida del poeta.</span>
             </div>
        </div>
    );
};

export default AboutMe;