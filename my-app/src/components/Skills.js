import React from 'react';
import {DiNodejs, DiPostgresql, DiMongodb, DiReact, DiCss3, DiHtml5, DiGithubBadge} from "react-icons/di"
import {SiRedux, SiJavascript} from "react-icons/si"
import style from "../styles/skills.module.css"

const Skills = () => {
    return (
        <div id={'skills'}className={style.container}>
            <img src={process.env.PUBLIC_URL + '/sheets.png'}></img>
            <div className={style.hard}>
                <div className={style.icons}>
            <SiJavascript className={style.child} color={"black"} size={90}/>
            <DiCss3 className={style.child}color={"black"} size={110}/>
            <DiHtml5 className={style.child}color={"black"} size={110}/>
            <DiNodejs className={style.child}color={"black"} size={170}/>
            <DiMongodb className={style.child}color={"black"} size={110}/>
            <DiPostgresql className={style.child}color={"black"} size={140}/>
            <DiReact className={style.child}color={"black"} size={140}/>
            <SiRedux className={style.child}color={"black"} size={100}/>
            <DiGithubBadge className={style.child}color={"black"} size={130}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;