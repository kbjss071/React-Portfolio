import React from "react";
import {Container, Row, Col} from 'react-bootstrap'
import Particle from "../Particle"
import { Typewriter } from 'react-simple-typewriter'

function Home(){

    return (
        <div className="home-section">
            <Container fluid id="home">
                <Particle />
                <Row className="space">
                    <h1>This is to avoid the space of navbar</h1>
                </Row>
                <Row>
                    <div className="first">
                        <span style={{fontWeight: 'bold ', fontSize:'35px', color: 'white'}}>
                            <Typewriter
                            words={['Hello!', 'Welcome!', 'Have a nice day!']}
                            loop={0}
                            cursor
                            cursorStyle='|'
                            />
                        <span className="wave" role="img" aria-labelledby="wave">
                        </span>👋🏻</span>
                    </div>

                </Row>
                <Row>
                    <div>

                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Home;