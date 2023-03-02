import React from "react";
import {FaGithub, FaLinkedin, FaStackOverflow} from "react-icons/fa"
import {Container, Row, Col} from 'react-bootstrap'
import "../styles/Footer.css"
import { Icon } from '@iconify/react';

function Footer(){
    const style = {fontSize: "1.5rem"}
    let date = new Date()
    let year = date.getFullYear();

    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-center">
                    <h3>Designed and Developed by Jin Kang</h3>
                </Col>
                <Col md="4" className="footer-center">
                    <h3>Copyright © {year}</h3>
                </Col>
                <Col md="4" className="footer-center footer-icon">
                    {/* <h1>More about me</h1> */}
                    <ul className="list-style">
                        <li><a href="https://github.com/kbjss071" target="_blank" rel="noreferrer"><FaGithub style={style}/></a></li>
                        <li><a href="https://www.linkedin.com/in/jin-kang-072b3a127/" target="_blank" rel="noreferrer"><FaLinkedin style={style}/></a></li>
                        <li><a href="https://stackoverflow.com/users/19080416/jin-kang" target="_blank" rel="noreferrer"><FaStackOverflow style={style}/></a></li>
                        <li><a href="https://leetcode.com/kbjkbc123/" target="_blank" rel="noreferrer"><Icon icon="simple-icons:leetcode" style={style}/></a></li>
                    </ul>

                </Col>
            </Row>
        </Container>        
    )
}

export default Footer;