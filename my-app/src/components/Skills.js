import React from 'react';
import {DiNodejs, DiPostgresql, DiMongodb, DiReact, DiCss3, DiHtml5, DiGithubBadge} from "react-icons/di"
import {SiRedux, SiJavascript} from "react-icons/si"
import style from "../styles/skills.module.css"

const Skills = () => {
    return (
        <div id={'skills'}className={style.container}>
            <div className={style.hard}>
            <img src={process.env.PUBLIC_URL + '/sheets.png'}></img>
                <div className={style.icons}>
            <SiJavascript color={"white"} size={80}/>
            <DiCss3 color={"white"} size={100}/>
            <DiHtml5 color={"white"} size={100}/>
            <DiNodejs color={"white"} size={160}/>
            <DiMongodb color={"white"} size={100}/>
            <DiPostgresql color={"white"} size={130}/>
            <DiReact color={"white"} size={130}/>
            <SiRedux color={"white"} size={90}/>
            <DiGithubBadge color={"white"} size={120}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;