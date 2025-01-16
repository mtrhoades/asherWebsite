import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { FaPhoneAlt } from "react-icons/fa";

// lightbox
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

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

    // lightbox
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const images = [
      { src: image0629, description: "Front Commercial Gate" },
      { src: image0630, description: "Back Commercial Gate" },
      { src: image9580, description: "Front Hollow Metal Roll-Up Door" },
      { src: image9578, description: "Back Hollow Metal Roll-Up Door" },
      { src: imagebrokendoor1, description: "Before Repair on Roll-Up Door (left side)" },
      { src: image0248, description: "After Repair on Roll-Up Door (left side)" },
      { src: imagebrokendoor2, description: "Before Repair on Roll-Up Door (right side)"},
      { src: image0249, description: "After Repair on Roll-Up Door (right side)"}
    ];
  
    const handleImageClick = (index) => {
      setCurrentIndex(index);
      setLightboxOpen(true);
    };
  
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
                  <img onClick={() => handleImageClick(0)} src={image0629}></img>
                  <p>Front Commercial Gate</p>                  
                </div>
                <div>
                  <img onClick={() => handleImageClick(1)} src={image0630}></img>
                  <p>Back Commercial Gate</p>
                </div>
              </div>

              {/* row 2 front/back images*/}
              <div className="servicesGrid">
                <div>
                  <img onClick={() => handleImageClick(2)} src={image9580}></img>
                  <p>Front Hollow Metal Roll-Up Door</p>
                </div>
                <div>
                  <img onClick={() => handleImageClick(3)} src={image9578}></img>
                  <p>Back Hollow Metal Roll-Up Door</p>
                </div>
              </div>

              {/* row 3 front/back images*/}
              <div className="servicesGrid">
                <div>
                  <img onClick={() => handleImageClick(4)} src={imagebrokendoor1}></img>
                  <p>Before Repair on Roll-Up Door (left side)</p>
                </div>
                <div>
                  <img onClick={() => handleImageClick(5)} src={image0248}></img>
                  <p>After Repair on Roll-Up Door (left side)</p>
                </div>
              </div>

              {/* row 4 front/back images*/}
              <div className="servicesGrid">
                <div>
                  <img onClick={() => handleImageClick(6)} src={imagebrokendoor2}></img>
                  <p>Before Repair on Roll-Up Door (right side)</p>
                </div>
                <div>
                  <img onClick={() => handleImageClick(7)} src={image0249}></img>
                  <p>After Repair on Roll-Up Door (right side)</p>
                </div>
              </div>

            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button href="tel:8088668150"><FaPhoneAlt className="fa-2x"/>Call us now!</Button>
          </Modal.Footer>
          {/* Lightbox */}
          <Lightbox
            open={lightboxOpen}
            close={() => setLightboxOpen(false)}
            slides={images}
            index={currentIndex}
            setIndex={setCurrentIndex}
            render={{
              slide: ({ slide }) => (
                <div style={{ position: "relative", textAlign: "center", zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={slide.src} alt={slide.description} style={{ maxWidth: "100%"}} />
                  <p style={{
                    color: "white",
                    fontSize: "1.2rem",
                    position: "absolute",
                    top: 200,
                    zIndex: 2,
                    paddingLeft: "10px",
                    textShadow: "3px 2px 3px grey, 0 0 1em black, 0 0 0.2em black"    
                  }}>
                    {slide.description}
                  </p>
                </div>
              ),
            }}
          />
        </Modal>
      );
    }

export default CommercialModal;