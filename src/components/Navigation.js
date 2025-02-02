import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsList, BsX } from 'react-icons/bs';
import { FaPhoneAlt } from "react-icons/fa";
import AboutModal from './Modals/AboutModal';

const Navigation = ({ onServicesClick, onContactClick, onTestimonialsClick }) => {
    // modal state for about us
    const [modalShow, setModalShow] = React.useState(false);
    
    const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility

     // Function to toggle menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to scroll to the sections and close the menu
  const handleMenuItemClick = (scrollToFunc) => {
    scrollToFunc();
    setMenuOpen(false); // Close the menu after clicking a link
  };

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        };

  return (
    <Navbar sticky="top" expand="md" className="navBar" bg="light">
      <Container className="nav-container">
        {/* Navbar Brand */}
        <Navbar.Brand onClick={handleScrollToTop} className="nav-header" style={{ cursor: 'pointer', color: '#386BC0' }}>
          <h1>Asher's Door Services LLC</h1>
        </Navbar.Brand>

        {/* Hamburger Menu Icon */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          {menuOpen ? (
            <BsX size={45} /> // Display "X" when menu is open
          ) : (
            <BsList size={45} /> // Display hamburger when menu is closed
          )}
        </div>

        {/* Side Menu that slides in from the right */}
        <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
          <div className="side-menu-links">
            <Nav.Link onClick={() => setModalShow(true)}>About</Nav.Link>
            <Nav.Link onClick={() => handleMenuItemClick(onServicesClick)}>Services</Nav.Link>
            <Nav.Link onClick={() => handleMenuItemClick(onContactClick)}>Contact</Nav.Link>
            <Nav.Link onClick={() => handleMenuItemClick(onTestimonialsClick)}>Reviews</Nav.Link>
            <Nav.Link style={{color: '#386BC0'}} href="tel:8088668150"><FaPhoneAlt className="fa-2x"/>Call Now!</Nav.Link>
          </div>
        </div>

        {/* Collapsible Navbar Links (Hidden on mobile) */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-menu h4">
            <Nav.Link onClick={() => setModalShow(true)}>About</Nav.Link>
            <Nav.Link onClick={() => handleMenuItemClick(onServicesClick)}>Services</Nav.Link>
            <Nav.Link onClick={() => handleMenuItemClick(onContactClick)}>Contact</Nav.Link>
            <Nav.Link onClick={() => handleMenuItemClick(onTestimonialsClick)}>Reviews</Nav.Link>
            <Nav.Link style={{color: '#386BC0'}} href="tel:8088668150"><FaPhoneAlt className="fa-2x"/>Call Now!</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <AboutModal show={modalShow} onHide={() => setModalShow(false)} />
    </Navbar>
    
  )
}

export default Navigation;