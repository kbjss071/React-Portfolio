import {FaJava, FaPython, FaCss3Alt, FaHtml5, FaRProject, FaJs, 
    FaReact, FaNodeJs, FaNpm, FaGitAlt} from "react-icons/fa";
import React from 'react';
import '../styles/Skills.css';

function Skills() {
    return (
        <div>
            <h1>Skills</h1>
            <div>
                <h3 class="skill-title">FrontEnd: </h3>
                <FaHtml5 />
                <FaCss3Alt />
                <FaJs />
                <FaReact />
            </div>
            <div>
                <h3 class="skill-title">BackEnd: </h3>
                <FaJava />
                <FaNodeJs />
                <FaNpm />
            </div>
            <div>
                <h3 class="skill-title">Data Science or other skills: </h3>
                <FaPython />
                <FaRProject />
                <FaGitAlt />
            </div>
        </div>
    );
  }

  export default Skills;