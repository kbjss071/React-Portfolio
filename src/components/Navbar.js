import React from 'react';
import '../styles/Navbar.css';
import {Container, Row, Col} from 'react-bootstrap/';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

function NavBar(props) {
  const navbarStyle = {justifyContent: "right", display: "inline-block"}
  const brandStyle = {fontSize: "3rem", color:"white", display:"inline-block"}
  return (
    <Navbar>
      <Container fluid className='container'>
        <Row>
          <Col md="4">
            <Navbar.Brand style={brandStyle}><Link to="/">JK</Link></Navbar.Brand>
          </Col>
          <Col md="8" className='right'>
            <Navbar.Collapse>
              <Nav>
                  <Nav.Link className='mx-2' as={Link} to="React-Portfolio">Home</Nav.Link>
                  <Nav.Link className='mx-2' as={Link} to="About">About</Nav.Link>
                  <Nav.Link className='mx-2' as={Link} to="Portfolio">Portfolio</Nav.Link>
                  <Nav.Link className='mx-2' as={Link} to="Contact">Contact</Nav.Link>
                  <Nav.Link className='mx-2' as={Link} to="Resume">Resume</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default NavBar;