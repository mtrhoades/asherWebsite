import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { MDBContainer, MDBBtn } from 'mdb-react-ui-kit';
import img0136 from '../images/Asher garage images/drivewaygates/carouselimages/IMG_0136.jpg';
import image9253 from '../images/Asher garage images/residential/carouselimages/IMG_9253.jpg';
import image9120 from '../images/Asher garage images/residential/carouselimages/IMG_9120.jpg';
import image0343 from '../images/Asher garage images/drivewaygates/carouselimages/IMG_0343.jpg';

import AboutModal from './Modals/AboutModal';

const CarouselHero = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="carouselContainer" id="hero">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={img0136} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image9253} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image0343} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image9120} alt="Fourth slide" />
        </Carousel.Item>
      </Carousel>
      <div className="hero-overlay">
        <MDBContainer className="hero-content">
          {/* <h4>Ashers Door Services LLC</h4> */}
          <h2>Supplies, Installations, & Repairs</h2>
          <h2>Residential & Commercial Services</h2>
          <h2>Automatic Driveway Gates.</h2>
          <MDBBtn className="heroBtn" onClick={() => setModalShow(true)}>Learn More</MDBBtn>
        </MDBContainer>
        <AboutModal show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </div>
  );
};

export default CarouselHero;
