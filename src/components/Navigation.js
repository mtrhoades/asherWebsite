import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsList, BsX } from 'react-icons/bs';

const Navigation = ({ onServicesClick, onContactClick, onReviewsClick }) => {
    
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
    <Navbar sticky="top" expand="md" className="navBar" bg="light" data-bs-theme="light">
      <Container className="nav-container">
        {/* Navbar Brand */}
        <Navbar.Brand onClick={handleScrollToTop} className="nav-header" style={{ cursor: 'pointer' }}>
          <h1>Ashers Door Services LLC</h1>
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
            <Nav.Link onClick={() => handleMenuItemClick(onServicesClick)}>Services</Nav.Link>
            <Nav.Link onClick={() => handleMenuItemClick(onContactClick)}>Contact</Nav.Link>
            <Nav.Link onClick={() => handleMenuItemClick(onReviewsClick)}>Reviews</Nav.Link>
            <Nav.Link>About</Nav.Link>
          </div>
        </div>

        {/* Collapsible Navbar Links (Hidden on mobile) */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-menu h5">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link onClick={() => handleMenuItemClick(onServicesClick)}>Services</Nav.Link>
            <Nav.Link onClick={() => handleMenuItemClick(onContactClick)}>Contact</Nav.Link>
            <Nav.Link onClick={() => handleMenuItemClick(onReviewsClick)}>Reviews</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation;