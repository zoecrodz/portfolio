import React from "react";
import style from "../styles/welcome.module.css";

const Welcome = ({english}) => {
  return (
    <div id={'home'}className={style.container}>
      <div>
        {english ? (
          <>
          <span style={{fontSize:'40px'}}>Hey! I'm Zoe</span>
          <br />
          <h1 style={{marginTop: '-5px'}}>Web JS Developer</h1>
          </>
        ) : (
          <>
          <span style={{fontSize:'40px'}}>Hola! Soy Zoe</span>
          <br />
          <h1 style={{marginTop: '-5px'}}>Desarrolladora Web JS</h1>
          </>
        )}
      </div>
      <img src={process.env.PUBLIC_URL + "/flowerss.png"}></img>
    </div>
  );
};

export default Welcome;
