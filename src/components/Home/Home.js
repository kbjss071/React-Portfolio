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
                {/* <Row className="space">
                    <h1>This is to avoid the space of navbar</h1>
                </Row> */}
                <Row className="first">
                        <Col className="left">
                            {/* <div className="welcome" style={{fontWeight: 'bold ', fontSize:'35px', color: 'white', display: 'flex'}}>
                                <Typewriter
                                words={['Hello!', 'Welcome!', 'Have a nice day!']}
                                loop={0}
                                cursor
                                cursorStyle='|'
                                />
                            <span className="wave" role="img" aria-labelledby="wave">
                            👋🏻</span><br/><br/> </div> */}
                            <div className="desc">
                                <h1>I'm Jin Kang<span className="wave" role="img" aria-labelledby="wave">
                            👋🏻</span></h1>
                                <h3>Welcome to my portfolio website</h3>
                            </div>
                            <div className="desc">
                                <br></br>
                                <h2>Coding is sports for me.</h2>
                                <br/>
                                <p>Keep&nbsp; <span> 
                                <Typewriter className="sports-typewriter"
                                words={['Learning', 'Working Out', 'Applying', 'the Cycle']}
                                loop={0}
                                cursor
                                cursorStyle='|'
                                /></span>
                                </p>
                            </div>
                        </Col>
                        <Col aria-hidden="true" className="image-container">
                            <img className="dev-image" src={dev} alt={alText}/>
                        </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Home;