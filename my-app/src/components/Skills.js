import React from 'react';
import {DiNodejs, DiPostgresql, DiMongodb, DiReact, DiCss3, DiHtml5, DiGithubBadge} from "react-icons/di"
import {SiRedux, SiJavascript} from "react-icons/si"
import style from "../styles/skills.module.css"

const Skills = () => {
    return (
        <div id={'skills'}className={style.container}>
            <img className={style.img} src={process.env.PUBLIC_URL + '/sheets.png'}></img>
            <h1>Skills</h1>
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
                <div className={style.mobileIcons}>
            <SiJavascript className={style.child} color={"black"} size={54}/>
            <DiCss3 className={style.child}color={"black"} size={70}/>
            <DiHtml5 className={style.child}color={"black"} size={70}/>
            <DiNodejs className={style.child}color={"black"} size={130}/>
            <DiMongodb className={style.child}color={"black"} size={70}/>
            <DiPostgresql className={style.child}color={"black"} size={100}/>
            <DiReact className={style.child}color={"black"} size={100}/>
            <SiRedux className={style.child}color={"black"} size={70}/>
            <DiGithubBadge className={style.child}color={"black"} size={100}/>
                </div>
        </div>
    );
};

export default Skills;