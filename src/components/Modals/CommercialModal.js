import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { FaPhoneAlt } from "react-icons/fa";

// images
// row 1
import image0629 from '../../images/Asher garage images/commercial/IMG_0629.jpg';
import image0630 from '../../images/Asher garage images/commercial/IMG_0630.jpg';
// row 2
import image9578 from '../../images/Asher garage images/commercial/IMG_9578.jpg';
import image9580 from '../../images/Asher garage images/commercial/IMG_9580.jpg';
// row 3
import imagebrokendoor1 from '../../images/Asher garage images/commercial/brokendoor1.jpg';
import image0248 from '../../images/Asher garage images/commercial/IMG_0248.jpg';
// row 4
import imagebrokendoor2 from '../../images/Asher garage images/commercial/brokendoor2.jpg';
import image0249 from '../../images/Asher garage images/commercial/IMG_0249.jpg';

const CommercialModal = (props) => {
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered size="xl">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Commercial Services
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="grid-example">
            <Container>
              {/* intro text here */}
              <p>Asher's commercial services include: supply, install, & repair of commercial gates, and/or hollow metal roll-up doors. We use <a target="_blank" href="https://www.janusintl.com/rolling-steel-doors">Janus </a>brand commercial roll-up doors and we use <a target="_blank" href="https://www.liftmaster.com/">Liftmaster </a>brand openers for the commercial gates. Each hollow metal roll-up door can be custom fitted to your needs. Each row of images shown below showcase the front and back of the same door installed. There are also before and after images of a commercial roll-up door being repaired.</p>

              {/* row 1 front/back images*/}
              <div className="servicesGrid">
                <img src={image0629}></img>
                <img src={image0630}></img>
              </div>
                {/* video */}

              {/* row 2 front/back images*/}
              <div className="servicesGrid">
                <img src={image9580}></img>
                <img src={image9578}></img>
              </div>
                {/* video */}

              {/* row 3 front/back images*/}
              <div className="servicesGrid">
                <div>
                  <img src={imagebrokendoor1}></img>
                  <p>Before Repair</p>
                </div>
                <div>
                  <img src={image0248}></img>
                  <p>After Repair</p>
                </div>
              </div>
                {/* video */}

              {/* row 4 front/back images*/}
              <div className="servicesGrid">
                <div>
                  <img src={imagebrokendoor2}></img>
                  <p>Before Repair</p>
                </div>
                <div>
                  <img src={image0249}></img>
                  <p>After Repair</p>
                </div>
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

export default CommercialModal;