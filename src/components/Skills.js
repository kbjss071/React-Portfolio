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
                    <FaHtml5 className="icon"/>
                    <FaCss3Alt className="icon"/>
                    <FaJs className="icon"/>
                    <FaReact className="icon"/>
                    <FaJava className="icon"/>
                    <FaNode className="icon"/>
                    <FaPython className="icon"/>
                    <FaRProject className="icon"/>
                    <FaGitAlt className="icon"/>
                    <FaBootstrap className="icon"/>
                    <SiJquery className="icon"/>
                    <SiMongodb className="icon"/>
            </div>
            </IconContext.Provider>
        </div>
    );
  }

  export default Skills;