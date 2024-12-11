import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { MDBContainer, MDBCol, MDBRow, MDBBtn } from 'mdb-react-ui-kit';
import drivewayGate3 from '../images/drivewayGate3.jpg';
import drivewayGate1 from '../images/drivewayGate1.jpg';
import garageDoor3Front from '../images/garageDoor3front.jpeg';
import garageDoor2Front from '../images/garageDoor2Front.jpg';

import AboutModal from './Modals/AboutModal';

const CarouselHero = () => {
  // modal state for about us
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="carouselContainer" id="hero">
      <div className="hero-overlay">
        <MDBContainer className="heroHeaderContainer">
          <MDBCol className="heroHeaderCol">
            <MDBRow>
              <h4 style={{color: "blue"}}>Ashers Door Services LLC</h4>
            </MDBRow>
            <MDBRow>
              <h2 className="heroHeader">
               Garage Door Installation, Maintenance, Repairs. Serving Maui since 2015.
              </h2>
            </MDBRow>
            <MDBRow>
              <p style={{color: "brown"}} className="heroSecondaryText heroSecondaryTextP">
                Lorem ipsum dolor sit amet, consect orem ipsum dolor sit amet, consect orem ipsum dolor sit amet, consect orem ipsum
                dolor sit amet, consect orem ipsum dolor sit amet, consect.
              </p>
            </MDBRow>
          </MDBCol>
          <MDBCol className="heroBtnCol">
            <MDBBtn className="heroBtn" onClick={() => setModalShow(true)}>Learn More</MDBBtn>
          </MDBCol>
        </MDBContainer>
      </div>
      <AboutModal show={modalShow} onHide={() => setModalShow(false)} />
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
