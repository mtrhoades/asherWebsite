import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { MDBContainer, MDBBtn } from 'mdb-react-ui-kit';
import image7969 from '../images/Asher garage images/drivewaygates/servicesimages/IMG_7969.jpg';
import img0136 from '../images/Asher garage images/drivewaygates/carouselimages/IMG_0136.jpg';
import image9253 from '../images/Asher garage images/residential/carouselimages/IMG_9253.jpg';
import image9120 from '../images/Asher garage images/residential/carouselimages/IMG_9120.jpg';
import image0343 from '../images/Asher garage images/drivewaygates/carouselimages/IMG_0343.jpg';
import image9793 from '../images/Asher garage images/drivewaygates/carouselimages/IMG_9793.jpg';
import image0629 from '../images/Asher garage images/commercial/IMG_0629.jpg';
import image0440 from '../images/Asher garage images/residential/carouselimages/IMG_0440.jpg';
import image9580 from '../images/Asher garage images/commercial/IMG_9580.jpg';
import image6915 from '../images/Asher garage images/residential/servicesimages/IMG_6915.jpeg';

import AboutModal from './Modals/AboutModal';

const CarouselHero = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="carouselContainer" id="hero">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={image7969} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img0136} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image9253} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image0343} alt="Fourth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image9120} alt="Fifth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image9793} alt="Sixth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image0629} alt="Seventh slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image0440} alt="Eighth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image9580} alt="Ninth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image6915} alt="Tenth slide" />
        </Carousel.Item>
      </Carousel>
      <div className="hero-overlay">
        <MDBContainer className="hero-content">
          <div className="heroContentHeaders">
            <h2>Supply, Install, & Repair</h2>
            <h2 className="breakBar">|</h2>
            <h2>Residential & Commercial Services</h2>
            <h2 className="breakBar">|</h2>
            <h2>Automatic Driveway Gates.</h2>
          </div>
          <MDBBtn className="heroBtn" onClick={() => setModalShow(true)}>Learn More</MDBBtn>
        </MDBContainer>
        <AboutModal show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </div>
  );
};

export default CarouselHero;
