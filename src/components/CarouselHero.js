import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { MDBContainer, MDBCol, MDBRow, MDBBtn } from 'mdb-react-ui-kit';
import drivewayGate3 from '../images/drivewayGate3.jpg';
import drivewayGate1 from '../images/drivewayGate1.jpg';
import garageDoor3Front from '../images/garageDoor3front.jpeg';
import garageDoor2Front from '../images/garageDoor2Front.jpg';

const CarouselHero = () => {
  return (
    <div className="carouselContainer" id="hero">
      <div className="hero-overlay">
        <MDBContainer className="heroHeaderContainer">
          <MDBCol className="heroHeaderCol">
            <MDBRow>
              <h2 className="heroHeader">Ashers Door Services</h2>
            </MDBRow>
            <MDBRow>
              <h4 className="heroSecondaryText">
                Some mission statement here, or little list of services to provide
              </h4>
            </MDBRow>
            <MDBRow>
              <p className="heroSecondaryText heroSecondaryTextP">
                Lorem ipsum dolor sit amet, consect orem ipsum dolor sit amet, consect orem ipsum dolor sit amet, consect orem ipsum
                dolor sit amet, consect orem ipsum dolor sit amet, consect.
              </p>
            </MDBRow>
          </MDBCol>
          <MDBCol className="heroBtnCol">
            <MDBBtn className="heroBtn">Learn More</MDBBtn>
          </MDBCol>
        </MDBContainer>
      </div>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={drivewayGate3} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={garageDoor3Front} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={drivewayGate1} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={garageDoor2Front} alt="Fourth slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselHero;
