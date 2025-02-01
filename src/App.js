import './App.css';
import React, { useRef, useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import CarouselHero from './components/CarouselHero';
import Services from './components/Services';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const testimonialsRef = useRef(null);

  // State to track if components are visible
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [isTestimonialsVisible, setIsTestimonialsVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.3, // Trigger when 30% of the element is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === servicesRef.current) setIsServicesVisible(true);
          if (entry.target === contactRef.current) setIsContactVisible(true);
          if (entry.target === testimonialsRef.current) setIsTestimonialsVisible(true);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (servicesRef.current) observer.observe(servicesRef.current);
    if (contactRef.current) observer.observe(contactRef.current);
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);

    return () => {
      if (servicesRef.current) observer.unobserve(servicesRef.current);
      if (contactRef.current) observer.unobserve(contactRef.current);
      if (testimonialsRef.current) observer.unobserve(testimonialsRef.current);
    };
  }, []);

  // Smooth scroll with offset for navbar
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
        onTestimonialsClick={() => handleScrollToSection(testimonialsRef)}
      />

      <CarouselHero />

      <div ref={servicesRef} className={`fade-in-section ${isServicesVisible ? "visible" : ""}`}>
        <Services />
      </div>

      <div ref={contactRef} className={`fade-in-section ${isContactVisible ? "visible" : ""}`}>
        <Contact />
      </div>

      <div ref={testimonialsRef} className={`fade-in-section ${isTestimonialsVisible ? "visible" : ""}`}>
        <Testimonials />
      </div>

      <Footer />

    </div>
  );
}

export default App;
