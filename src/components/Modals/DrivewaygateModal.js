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
import image0136 from '../../images/Asher garage images/drivewaygates/carouselimages/IMG_0136.jpg';
// row 4
import image7677 from '../../images/Asher garage images/drivewaygates/servicesimages/IMG_7677.jpg';
import image0140 from '../../images/Asher garage images/drivewaygates//IMG_0140.jpg';
// row 5
import image7679 from '../../images/Asher garage images/drivewaygates/servicesimages/IMG_7679.jpg';
import image9072 from '../../images/Asher garage images/drivewaygates/servicesimages/IMG_9072.jpg';

const DrivewaygateModal = (props) => {
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered size="xl">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Automatic Driveway Gate Services
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="grid-example">
            <Container>
              {/* intro text here */}
              <p>At Asher's Door Services LLC, we specialize in crafting and installing fully customized automatic driveway gates designed to enhance the security and elegance of your property. Using advanced CNC technology, we can cut intricate, personalized designs out of metal, allowing your gate to reflect your unique style. Our gates are built with premium materials like aluminum, steel, and stainless steel, as well as innovative options like "knot wood," an aluminum finish that mimics the natural beauty of wood. Paired with dependable <a target="_blank" href="https://www.liftmaster.com/">Liftmaster</a> operators, we offer both solar-powered and A/C-powered systems, along with state-of-the-art keypad entry systems for added convenience and security. To complete the look, we can custom-build matching side doors for seamless design integration. Whether it’s installation, repairs, or complete customization, our family-run business brings over 20 years of expertise to every project, delivering gates that are as durable as they are distinctive.</p>

              {/* row 1 front/back images*/}
              <div className="servicesGrid">
                <div>
                  <img src={image0343}></img>
                  <p>Front Gate</p>
                </div>
                <div>
                  <img src={image0293}></img>
                  <p>Back Gate</p>
                </div>
              </div>

              {/* row 2 front/back images*/}
              <div className="servicesGrid">
                <div>
                  <img src={image9793}></img>
                  <p>Front Gate</p>
                </div>
                <div>
                  <img src={image9794}></img>
                  <p>Back Gate</p>
                </div>
              </div>

              {/* row 3 front/back images*/}
              <div className="servicesGrid">
                <div>
                  <img src={image7680}></img>
                  <p>Front Gate in Hana (paired with image of Liftmaster operator below)</p>
                </div>
                <div>
                  <img src={image0136}></img>
                  <p>Front Gate (pairs with custom-built side door below)</p>
                </div>
              </div>

              {/* row 4 */}
              <div className="servicesGrid">
                <img src={image7677}></img>
                <img src={image0140}></img>
              </div>

              {/* row 5 */}
              <div className="servicesGrid">
                <div>
                  <img src={image7679}></img>
                  <p>Solar powered operator</p>
                </div>
                <div>
                  <img src={image9072}></img>
                  <p>Newly installed state of the art keypad system</p>
                </div>
              </div>

            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button href="tel:8088668150"><FaPhoneAlt className="fa-2x"/>Call us now!</Button>
          </Modal.Footer>
        </Modal>
      );
    }

export default DrivewaygateModal;