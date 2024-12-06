import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = ({ onServicesClick }) => {
  return (
    <Navbar sticky="top" collapseOnSelect expand="md" className="navBar" bg="light" data-bs-theme="light">
        <Container className="nav-container">
            <Navbar.Brand href="#home" className="nav-header">
                <h1>Ashers Door Services LLC</h1>
            </Navbar.Brand>
            <Nav className="nav-menu h5">
                <Nav.Link href="#about">About</Nav.Link>

                <Nav.Link onClick={onServicesClick}>Services</Nav.Link>
                
                <Nav.Link href="#features">Contact</Nav.Link>
                <Nav.Link href="#pricing">Reviews</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Navigation;