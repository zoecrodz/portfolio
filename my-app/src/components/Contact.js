import React from "react";
import style from "../styles/contact.module.css";
import { MdEmail } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div id={"contact"} className={style.container}>
      <div className={style.modal}>
        <h1>Hablemos</h1>
        <form action='https://formspree.io/zoecrodz@gmail.com' method='POST' className={style.form}>
          <label>Nombre: </label>
          <input type="text"></input>
          <label>Correo: </label>
          <input type="text"></input>
          <label>Mensaje: </label>
          <textarea></textarea>
          <br />
          <input className={style.button} type="submit"></input>
        </form>

        <br />
        <br />
        <div className={style.media}>
          <MdEmail size={42} />
          <b>zoecrodz@gmail.com</b>
          <AiFillGithub size={42} />
          <b onClick={()=> {
            window.open('https://github.com/zoecrodz', '_blanck')
          }}>/zoecrodz</b>
          <AiFillLinkedin size={42} />
          <b onClick={()=> {
            window.open('https://www.linkedin.com/in/zoecrodriguez', '_blanck')
          }}>/zoecrodriguez</b>
        </div>
      </div>
      <img src={process.env.PUBLIC_URL + "/flower2.png"}></img>
    </div>
  );
};

export default Contact;
