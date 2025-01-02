import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { FaPhoneAlt } from "react-icons/fa";

// images
// row 1
import image0343 from '../../images/Asher garage images/drivewaygates/carouselimages/IMG_0343.jpg';
import image0293 from '../../images/Asher garage images/drivewaygates/carouselimages/IMG_0293.jpg';
// row 2
import image9793 from '../../images/Asher garage images/drivewaygates/carouselimages/IMG_9793.jpg';
import image9794 from '../../images/Asher garage images/drivewaygates/carouselimages/IMG_9794.jpg';
// row 3
import image7680 from '../../images/Asher garage images/drivewaygates/servicesimages/IMG_7680.jpg';
import image7677 from '../../images/Asher garage images/drivewaygates/servicesimages/IMG_7677.jpg';
// row 4
import image7679 from '../../images/Asher garage images/drivewaygates/servicesimages/IMG_7679.jpg';

const DrivewaygateModal = (props) => {
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered size="xl">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Driveway Gate Services
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="grid-example">
            <Container>
              {/* intro text here */}
              <p>Asher's driveway gate services include: supply, install, repair, & total customization. We build each client's driveway gate, customized, to their specific needs and wants. Asher uses a CNC machine for cutting out metal any which way you want your gate to look. We can also use different materials such as "Knot Wood", that makes the aluminum, look like wood. The gate operators we install are, <a target="_blank" href="https://www.liftmaster.com/">Liftmaster </a>brand. Each gate can pair with a side door that matches the custom look of the main gate. Below are rows of images that showcase the front and back of the same gate installed.</p>

              {/* row 1 front/back images*/}
              <div className="servicesGrid">
                <img src={image0343}></img>
                <img src={image0293}></img>
              </div>
                {/* video */}

              {/* row 2 front/back images*/}
              <div className="servicesGrid">
                <img src={image9793}></img>
                <img src={image9794}></img>
              </div>
                {/* video */}

              {/* row 3 front/back images*/}
              <div className="servicesGrid">
                <img src={image7680}></img>
                <div>
                  <p>Here to the left and below, we have a driveway gate installed out in Hana. As you can see in the images, Asher installed a solar powered Liftmaster operator with keypad system. Now depending on each client's situation, we can do solar powered, electrical (plug-in) powered, or battery powered operators.</p>
                </div>
              </div>

              {/* row 4 */}
              <div className="servicesGrid">
                <img src={image7677}></img>
                <img src={image7679}></img>
              </div>
                {/* video */}

            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button href="tel:8088668150"><FaPhoneAlt className="fa-2x"/>Call us now!</Button>
          </Modal.Footer>
        </Modal>
      );
    }

export default DrivewaygateModal;