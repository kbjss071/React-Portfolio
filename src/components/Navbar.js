import React from 'react';
import '../styles/Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar(props) {
  const {setCurrentTab} = props;
  const navbarStyle = {justifyContent: "right", display: "inline-block"}
  const brandStyle = {fontSize: "3rem", color:"white", display:"inline-block"}
  return (
    <Navbar>
      <Container>
        <Navbar.Brand style={brandStyle}>JK</Navbar.Brand>
        <Navbar.Collapse style={navbarStyle}>
          <Nav>
              <Nav.Link className='mx-2'><span onClick={()=> setCurrentTab("about")}>About</span></Nav.Link>
              <Nav.Link className='mx-2'><span onClick={()=> setCurrentTab("portfolio")}>Portfolio</span></Nav.Link>
              <Nav.Link className='mx-2'><span onClick={()=> setCurrentTab("contact")}>Contact</span></Nav.Link>
              <Nav.Link className='mx-2'><span onClick={()=> setCurrentTab("resume")}>Resume</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;