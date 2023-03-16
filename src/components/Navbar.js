import React from 'react';
import '../styles/Navbar.css';
import {Container, Row, Col, Nav, Navbar} from 'react-bootstrap/';
import {Link} from 'react-router-dom'
import {AiOutlineHome, AiOutlineUser, AiOutlineDesktop, AiOutlineComment, AiOutlineFileText} from "react-icons/ai"

function NavBar(props) {
  const navbarStyle = {justifyContent: "right", display: "inline-block"}
  const brandStyle = {fontSize: "3rem", color:"white", display:"inline-block"}
  return (
    <Navbar className='navbar-expand-lg fixed-top navbar-light'>
      <Container fluid className='container'>
        <Row>
          <Col>
            <Navbar.Brand style={brandStyle}><Link to="/React-Portfolio">JK</Link></Navbar.Brand>
            {/* <Navbar.Brand><Link to="/">JK</Link></Navbar.Brand> */}
          </Col>
          <Col className='right'>
            <Navbar.Collapse className='collapse' id='responsive-navbar-nav'>
              <Nav className='ms-auto'>
                <Nav.Item>
                  <Nav.Link className='mx-2' as={Link} to="React-Portfolio"><AiOutlineHome /><span>Home</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className='mx-2' as={Link} to="About"><AiOutlineUser /><span>About</span></Nav.Link> 
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className='mx-2' as={Link} to="Portfolio"><AiOutlineDesktop /><span>Portfolio</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className='mx-2' as={Link} to="Contact"><AiOutlineComment /><span>Contact</span></Nav.Link>                  
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className='mx-2' as={Link} to="Resume"><AiOutlineFileText /><span>Resume</span></Nav.Link>                  
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default NavBar;