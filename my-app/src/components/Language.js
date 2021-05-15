import React from 'react';
import style from '../styles/language.module.css'

const Language = ({english, setEnglish}) => {

    const handleLanguage = (e) => {
        e.preventDefault()
        setEnglish(!english)
    }

    return (
        <div className={style.container}>
            <b>ES</b>
            <div className={english ? style.en : style.miniContainer}>
            <div onClick={handleLanguage} className={style.circle}></div>
            </div>
            <b>EN</b>
        </div>
    );
};

export default Language ;