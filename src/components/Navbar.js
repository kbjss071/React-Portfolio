import React, { useState } from 'react';
import '../styles/Navbar.css';
import {Container, Nav, Navbar, NavItem} from 'react-bootstrap/';
import {Link} from 'react-router-dom'
import {AiOutlineHome, AiOutlineUser, AiOutlineDesktop, AiOutlineComment, AiOutlineFileText} from "react-icons/ai"
import {FaBars} from 'react-icons/fa'

function NavBar(props) {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };


  return (
    <Navbar collapseOnSelect fixed='top' expand="lg" bg="dark" variant="dark" expanded={expanded} onToggle={handleToggle}>
      <Container>
        <Navbar.Brand href="/React-Portfolio">JK</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='mr-auto right'>
            <Nav.Link className='mx-2' as={Link} to='React-Portfolio' onClick={handleToggle}><AiOutlineHome /><span>Home</span></Nav.Link>
            <Nav.Link className='mx-2' as={Link} to="About" onClick={handleToggle}><AiOutlineUser /><span>About</span></Nav.Link>
            <Nav.Link className='mx-2' as={Link} to='Portfolio' onClick={handleToggle}><AiOutlineDesktop /><span>Portfolio</span></Nav.Link>
            <Nav.Link className='mx-2' as={Link} to='Contact' onClick={handleToggle}><AiOutlineComment /><span>Contact</span></Nav.Link>
            <Nav.Link className='mx-2' as={Link} to='Resume' onClick={handleToggle}><AiOutlineFileText /><span>Resume</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavBar;