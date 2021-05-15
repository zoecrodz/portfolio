import React from "react";
import style from "../styles/footer.module.css";

const Footer = ({ english }) => {
  const year = new Date().getFullYear();

  return (
    <div className={style.container}>
      {english ? (
        <span>{year} | Developed by Zoe</span>
      ) : (
        <span>{year} | Desarrollado por Zoe</span>
      )}
    </div>
  );
};

export default Footer;
