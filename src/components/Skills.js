import {FaJava, FaPython, FaCss3Alt, FaHtml5, FaRProject, FaJs, 
    FaReact, FaNode, FaGitAlt, FaBootstrap} from "react-icons/fa";
import {SiJquery, SiMongodb} from "react-icons/si"
import React from 'react';
import '../styles/Skills.css';
import { IconContext } from "react-icons/lib";

function Skills() {
    return (
        <div>
            <h1 className="skill-title">Skills</h1>
            <IconContext.Provider value={{color:"gray", size: "5rem"}}>
            <div className="skills-container">
                <div className="flex-col text-slate-400 p-4 hover:text-purple-200 icon">
                    <FaHtml5/>
                </div>
                <div className="flex-col text-slate-400 p-4 hover:text-purple-200 icon">
                    <FaCss3Alt/>
                </div>
                <div className="flex-col text-slate-400 p-4 hover:text-purple-200 icon">
                    <FaJs/>
                </div>
                <div className="flex-col text-slate-400 p-4 hover:text-purple-200 icon">
                    <FaReact/>
                </div>
                <div className="flex-col text-slate-400 p-4 hover:text-purple-200 icon">
                    <FaJava/>
                </div>
                <div className="flex-col text-slate-400 p-4 hover:text-purple-200 icon">
                    <FaNode/>
                </div>
                <div className="flex-col text-slate-400 p-4 hover:text-purple-200 icon">
                    <FaPython/>
                </div>
                <div className="flex-col text-slate-400 p-4 hover:text-purple-200 icon">
                    <FaRProject/>
                </div>
                <div className="flex-col text-slate-400 p-4 hover:text-purple-200 icon">
                    <FaGitAlt/>
                </div>
                <div className="flex-col text-slate-400 p-4 hover:text-purple-200 icon">
                    <FaBootstrap/>   
                </div>
                <div className="flex-col text-slate-400 p-4 hover:text-purple-200 icon">
                    <SiJquery/>   
                </div>
                <div className="flex-col text-slate-400 p-4 hover:text-purple-200 icon">
                    <SiMongodb/>   
                </div>
            </div>
            </IconContext.Provider>
        </div>
    );
  }

  export default Skills;