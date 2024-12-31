import './App.css';
import React, { useRef } from 'react';
import Navigation from './components/Navigation';
import CarouselHero from './components/CarouselHero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const handleScrollToSection = (ref) => {
    const offset = 200; // Adjust this value based on Navbar height
    if (ref.current) {
      const elementPosition = ref.current.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="App">
      <Navigation 
        onServicesClick={() => handleScrollToSection(servicesRef)}
        onContactClick={() => handleScrollToSection(contactRef)}
      />
      <CarouselHero />
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
