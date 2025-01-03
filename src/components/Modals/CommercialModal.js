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
              <p>At Asher's Door Services LLC, we provide comprehensive solutions for commercial properties, specializing in the supply, installation, and repair of high-quality doors and gates. Our offerings include durable <a target="_blank" href="https://www.janusintl.com/rolling-steel-doors">Janus</a> brand metal roll-up doors, reliable <a target="_blank" href="https://www.liftmaster.com/">Liftmaster</a> operators, and hollow-metal doors designed for heavy-duty use. We also excel in crafting custom-made gates that combine functionality and style to meet the unique needs of your business. Whether you're outfitting a warehouse, retail space, or industrial facility, our family-run business brings over 20 years of expertise to every project, ensuring your doors and gates are built to last and operate seamlessly.</p>

              {/* row 1 front/back images*/}
              <div className="servicesGrid">
                <div>
                  <img src={image0629}></img>
                  <p>Front Gate</p>                  
                </div>
                <div>
                  <img src={image0630}></img>
                  <p>Back Gate</p>
                </div>
              </div>
                {/* video */}

              {/* row 2 front/back images*/}
              <div className="servicesGrid">
                <div>
                  <img src={image9580}></img>
                  <p>Front Roll-up Door</p>
                </div>
                <div>
                  <img src={image9578}></img>
                  <p>Back Roll-up Door</p>
                </div>
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