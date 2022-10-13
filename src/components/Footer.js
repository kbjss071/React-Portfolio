import React from "react";
import {FaGithub, FaLinkedin, FaStackOverflow} from "react-icons/fa"
import "../styles/Footer.css"
import { Icon } from '@iconify/react';

function Footer(){
    const style = {fontSize: "4rem"}

    return (
        <div className="container">
            <h1>More about me</h1>
            <ul className="list-style">
                <li><a href="https://github.com/kbjss071" target="_blank" rel="noreferrer"><FaGithub style={style}/></a></li>
                <li><a href="https://www.linkedin.com/in/jin-kang-072b3a127/" target="_blank" rel="noreferrer"><FaLinkedin style={style}/></a></li>
                <li><a href="https://stackoverflow.com/users/19080416/jin-kang" target="_blank" rel="noreferrer"><FaStackOverflow style={style}/></a></li>
                <li><a href="https://leetcode.com/kbjkbc123/" target="_blank" rel="noreferrer"><Icon icon="simple-icons:leetcode" style={style}/></a></li>
            </ul>
        </div>        
    )
}

export default Footer;