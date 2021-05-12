import React from "react";
import style from "../styles/navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={style.container}>
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
    </div>
  );
};

export default Navbar;
