import React from "react";
import style from "../styles/welcome.module.css";

const Welcome = () => {
  
  return (
    <div id={'home'}className={style.container}>
      <div>
        <span style={{fontSize:'40px'}}>Hola! Soy Zoe</span>
        <br />
        <h1 style={{marginTop: '-5px'}}>Web JS Developer</h1>
      </div>
      <img src={process.env.PUBLIC_URL + "/flowers.png"}></img>
    </div>
  );
};

export default Welcome;
