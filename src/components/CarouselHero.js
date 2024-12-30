import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { MDBContainer, MDBCol, MDBRow, MDBBtn } from 'mdb-react-ui-kit';
import img0136 from '../images/Asher garage images/drivewaygates/carouselimages/IMG_0136.jpg';
import image9253 from '../images/Asher garage images/residential/carouselimages/IMG_9253.jpg';
import image9120 from '../images/Asher garage images/residential/carouselimages/IMG_9120.jpg';
import image0343 from '../images/Asher garage images/drivewaygates/carouselimages/IMG_0343.jpg';

import AboutModal from './Modals/AboutModal';

const CarouselHero = () => {
  // modal state for about us
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="carouselContainer" id="hero">
      <div className="hero-overlay">
        <MDBCol className="heroHeaderCol">
          <MDBRow>
            <h4 style={{color: "blue"}}>Ashers Door Services LLC</h4>
          </MDBRow>
          <MDBRow>
            <h2 className="heroHeader">
              <p>Supplies, Installations, & Repairs</p>
              <p>Residential & Commercial Services</p>
              <p>Automatic Driveway Gates.</p>
            </h2>
          </MDBRow>
          {/* <MDBRow>
            <p style={{color: "brown"}} className="heroSecondaryText heroSecondaryTextP">
              Lorem ipsum dolor sit amet, consect orem ipsum dolor sit amet, consect orem ipsum dolor sit amet, consect orem ipsum
              dolor sit amet, consect orem ipsum dolor sit amet, consect.
            </p>
          </MDBRow> */}
        </MDBCol>
        <MDBCol className="heroBtnCol">
          <MDBBtn className="heroBtn" onClick={() => setModalShow(true)}>Learn More</MDBBtn>
        </MDBCol>
      </div>
      <AboutModal show={modalShow} onHide={() => setModalShow(false)} />
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
    </div>
  );
};

export default CarouselHero;
