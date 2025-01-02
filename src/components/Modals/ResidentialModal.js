import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { FaPhoneAlt } from "react-icons/fa";

// videos

// images
// row 1
import image6915 from '../../images/Asher garage images/residential/servicesimages/IMG_6915.jpeg';
import image6917 from '../../images/Asher garage images/residential/servicesimages/IMG_6917.jpeg';
// row 2
import image0440 from '../../images/Asher garage images/residential/carouselimages/IMG_0440.jpg';
import image0439 from '../../images/Asher garage images/residential/servicesimages/IMG_0439.jpg';
// row 3
import image9253 from '../../images/Asher garage images/residential/carouselimages/IMG_9253.jpg';
import image9252 from '../../images/Asher garage images/residential/servicesimages/IMG_9252.jpg';

const ResidentialModal = (props) => {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered size="xl">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Residential Services
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
          {/* intro text here */}
          <p>Asher's residential services include: supply, install, & repair. We use <a target="_blank" href="https://www.clopaydoor.com/?gclsrc=aw.ds&gad_source=1&gclid=Cj0KCQiAj9m7BhD1ARIsANsIIvCj-0NDWRKvRJ_k5tv6I78l_AxMo_WaDXta1WkRVRc8x3UUcMgvxfoaAhEIEALw_wcB">Clopay </a>brand garage doors and we use <a target="_blank" href="https://www.liftmaster.com/">Liftmaster </a>brand openers. Each door can be custom fitted to your needs. Each row of images shown below showcase the front and back of the same door installed.</p>

          {/* row 1 front/back images*/}
          <div className="servicesGrid">
            <img src={image6915}></img>
            <img src={image6917}></img>
          </div>
            {/* video */}

          {/* row 2 front/back images*/}
          <div className="servicesGrid">
            <img src={image0440}></img>
            <img src={image0439}></img>
          </div>
            {/* video */}

          {/* row 3 front/back images*/}
          <div className="servicesGrid">
            <img src={image9253}></img>
            <img src={image9252}></img>
          </div>
            {/* video */}

        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button href="tel:8088668150"><FaPhoneAlt className="fa-2x"/>Call us now!</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ResidentialModal;
