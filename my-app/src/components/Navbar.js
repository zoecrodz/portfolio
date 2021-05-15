import React from "react";
import style from "../styles/navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = ({english}) => {
  return (
    <div className={style.container}>
      {english ? (
        <>
        <h1 onClick={() => {
          window.location.replace("/#home")
        }}>home</h1>
      <h1 onClick={() => {
            window.location.replace("/#about")
        }}>about</h1>
      <h1 onClick={() => {
            window.location.replace("/#skills")
        }}>skills</h1>
      <h1 onClick={() => {
            window.location.replace("/#projects")
        }}>projects</h1>
      <h1 onClick={() => {
            window.location.replace("/#contact")
        }}>contact</h1>
        </>
      ) : (
        <>
        <h1 onClick={() => {
          window.location.replace("/#home")
        }}>inicio</h1>
      <h1 onClick={() => {
            window.location.replace("/#about")
        }}>perfil</h1>
      <h1 onClick={() => {
            window.location.replace("/#skills")
        }}>habilidades</h1>
      <h1 onClick={() => {
            window.location.replace("/#projects")
        }}>proyectos</h1>
      <h1 onClick={() => {
            window.location.replace("/#contact")
        }}>contacto</h1>
        </>
      )}
    </div>
  );
};

export default Navbar;
