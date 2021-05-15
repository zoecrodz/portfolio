import React from 'react';
import style from '../styles/footer.module.css'

const Footer = () => {

    const year = new Date().getFullYear()

    return (
        <div className={style.container}>
            <span>{year} | Desarrollado por Zoe</span>
        </div>
    );
};

export default Footer;