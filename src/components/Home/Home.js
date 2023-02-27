import React from "react";
import {Container, Row, Col} from 'react-bootstrap'
import Particle from "../Particle"

function Home(){
    return (
        <div>
            <Container fluid className="home-section" id="home">
                <Particle />
            </Container>
        </div>
    )
}

export default Home;