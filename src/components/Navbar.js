import React, { useState } from 'react';
import '../styles/Navbar.css';
import {Container, Nav, Navbar, NavItem} from 'react-bootstrap/';
import {Link} from 'react-router-dom'
import {AiOutlineHome, AiOutlineUser, AiOutlineDesktop, AiOutlineComment, AiOutlineFileText} from "react-icons/ai"
import {FaBars} from 'react-icons/fa'

function NavBar(props) {
  // const brandStyle = {fontSize: "3rem", color:"white", display:"inline-block"}

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    // <Navbar collapseOnSelect className='navbar-expand-lg fixed-top navbar-light'>
    //   <Container fluid>
    //         <Navbar.Brand><Link to="/React-Portfolio">JK</Link></Navbar.Brand>
    //         <Navbar.Toggle aria-controls='responsive-navbar-nav' />
    //         <Navbar.Collapse className='collapse' id='responsive-navbar-nav'>
    //           <Nav className='ms-auto right'>
    //             <Nav.Item>
    //               <Nav.Link className='mx-2' as={Link} to="React-Portfolio"><AiOutlineHome /><span>Home</span></Nav.Link>
    //             </Nav.Item>
    //             <Nav.Item>
    //               <Nav.Link className='mx-2' as={Link} to="About"><AiOutlineUser /><span>About</span></Nav.Link> 
    //             </Nav.Item>
    //             <Nav.Item>
    //               <Nav.Link className='mx-2' as={Link} to="Portfolio"><AiOutlineDesktop /><span>Portfolio</span></Nav.Link>
    //             </Nav.Item>
    //             <Nav.Item>
    //               <Nav.Link className='mx-2' as={Link} to="Contact"><AiOutlineComment /><span>Contact</span></Nav.Link>                  
    //             </Nav.Item>
    //             <Nav.Item>
    //               <Nav.Link className='mx-2' as={Link} to="Resume"><AiOutlineFileText /><span>Resume</span></Nav.Link>                  
    //             </Nav.Item>
    //           </Nav>
    //         </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/React-Portfolio">JK</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='ms-auto right'>
            <Nav.Link className='mx-2' as={Link} to='React-Portfolio'><AiOutlineHome /><span>Home</span></Nav.Link>
            <Nav.Link className='mx-2' as={Link} to="About"><AiOutlineUser /><span>About</span></Nav.Link>
            <Nav.Link className='mx-2' as={Link} to='Portfolio'><AiOutlineDesktop /><span>Portfolio</span></Nav.Link>
            <Nav.Link className='mx-2' as={Link} to='Contact'><AiOutlineComment /><span>Contact</span></Nav.Link>
            <Nav.Link className='mx-2' as={Link} to='Resume'><AiOutlineFileText /><span>Resume</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavBar;