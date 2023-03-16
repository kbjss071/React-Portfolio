import React from "react";
import {Container, Row, Col} from 'react-bootstrap'
import Particle from "../Particle"
import { Typewriter } from 'react-simple-typewriter'
import dev from '../../assets/images/dev.jpg'
import './Home.css'

function Home(){
    let alText = "dev image"

    return (
        <div className="home-section">
            <Container fluid id="home">
                <Particle />
                <Row className="space">
                    <h1>This is to avoid the space of navbar</h1>
                </Row>
                <Row className="first">
                        <Col className="left">
                            <div className="welcome" style={{fontWeight: 'bold ', fontSize:'35px', color: 'white', display: 'flex'}}>
                                <Typewriter
                                words={['Hello!', 'Welcome!', 'Have a nice day!']}
                                loop={0}
                                cursor
                                cursorStyle='|'
                                />
                            <span className="wave" role="img" aria-labelledby="wave">
                            👋🏻</span> </div>
                        </Col>
                        <Col className="right image-container">
                            <img className="dev-image" src={dev} alt={alText}/>
                        </Col>

                </Row>
                <Row className="second">
                    <div>
                        <h1>I'm a software developer</h1>
                        <p></p>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Home;