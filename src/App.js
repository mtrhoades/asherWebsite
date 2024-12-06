import './App.css';
import React, { useRef } from 'react';
import Navigation from './components/Navigation';
import CarouselHero from './components/CarouselHero';
import Services from './components/Services';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {

  const servicesRef = useRef(null);

  const handleScrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">

      <Navigation onServicesClick={handleScrollToServices} />

      <CarouselHero />

      <div ref={servicesRef}>
        <Services />
      </div>
      
      <Contact />

      <Testimonials />

      <Footer />

    </div>
  );
}

export default App;
