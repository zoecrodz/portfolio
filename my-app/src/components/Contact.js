import React from "react";
import style from "../styles/contact.module.css";
import { MdEmail } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

const Contact = ({ english }) => {
  return (
    <>
      <div id={"contact"} className={style.container}>
        <div className={style.modal}>
          {english ? <h1>Contact</h1> : <h1>Hablemos</h1>}
          <form
            action="https://formspree.io/f/xzbyegwn"
            method="POST"
            className={style.form}
          >
            {english ? (
              <>
                <label>Name: </label>
                <input type="text"></input>
                <label>Email: </label>
                <input type="text"></input>
                <label>Message: </label>
                <textarea></textarea>
                <br />
                <input value="Submit" className={style.button} type="submit"></input>
              </>
            ) : (
              <>
                <label>Nombre: </label>
                <input type="text"></input>
                <label>Correo: </label>
                <input type="text"></input>
                <label>Mensaje: </label>
                <textarea></textarea>
                <br />
                <input value="Enviar" className={style.button} type="submit"></input>
              </>
            )}
            <div className={style.mediaMobile}>
              <div>
                <MdEmail size={30} />
                <b>zoecrodz@gmail.com</b>
              </div>
              <div>
                <AiFillGithub size={30} />
                <b
                  onClick={() => {
                    window.open("https://github.com/zoecrodz", "_blanck");
                  }}
                >
                  /zoecrodz
                </b>
              </div>
              <div>
                <AiFillLinkedin size={30} />
                <b
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/in/zoecrodriguez",
                      "_blanck"
                    );
                  }}
                >
                  /zoecrodriguez
                </b>
              </div>
            </div>
          </form>

          <br />
          <br />
          <div className={style.media}>
            <MdEmail size={42} />
            <b>zoecrodz@gmail.com</b>
            <AiFillGithub size={42} />
            <b
              onClick={() => {
                window.open("https://github.com/zoecrodz", "_blanck");
              }}
            >
              /zoecrodz
            </b>
            <AiFillLinkedin size={42} />
            <b
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/zoecrodriguez",
                  "_blanck"
                );
              }}
            >
              /zoecrodriguez
            </b>
          </div>
        </div>
        <img src={process.env.PUBLIC_URL + "/flower2.png"}></img>
      </div>
    </>
  );
};

export default Contact;
