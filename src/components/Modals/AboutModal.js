import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaPhoneAlt } from "react-icons/fa";
import { MDBContainer, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

// lightbox
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// images for gallery 1
import image9118 from '../../images/Asher garage images/residential/servicesimages/IMG_9118.jpg';
import image9119 from '../../images/Asher garage images/residential/servicesimages/IMG_9119.jpg';
import image9120 from '../../images/Asher garage images/residential/carouselimages/IMG_9120.jpg';
import image9116 from '../../images/Asher garage images/residential/servicesimages/IMG_9116.jpg';

// images for gallery 2
import image9578 from '../../images/Asher garage images/commercial/IMG_9578.jpg';
import image9580 from '../../images/Asher garage images/commercial/IMG_9580.jpg';
import image0629 from '../../images/Asher garage images/commercial/IMG_0629.jpg';
import image0630 from '../../images/Asher garage images/commercial/IMG_0630.jpg';

// images for gallery 3
import image7969 from '../../images/Asher garage images/drivewaygates/servicesimages/IMG_7969.jpg';
import image7968 from '../../images/Asher garage images/drivewaygates/servicesimages/IMG_7968.jpg';
import image7967 from '../../images/Asher garage images/drivewaygates/servicesimages/IMG_7967.jpg';
import image7945 from '../../images/Asher garage images/drivewaygates/servicesimages/IMG_7945.jpg';

const AboutModal = (props) => {

  // lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: image9118, description: 'Custom residential service with overlapping garage doors' },
    { src: image9119, description: 'Custom residential service with overlapping garage doors' },
    { src: image9120, description: 'Custom residential service with overlapping garage doors' },
    { src: image9116, description: 'Custom residential service with overlapping garage doors' },
    { src: image9580, description: 'Custom commercial service with hollow metal roll-up door (front)' },
    { src: image9578, description: 'Custom commercial service with hollow metal roll-up door (back)' },
    { src: image0629, description: 'Custom commercial service with entrance gate' },
    { src: image0630, description: 'Custom commerical service with exit gate' },
    { src: image7969, description: 'Custom designed automatic driveway gate' },
    { src: image7968, description: 'Custom designed automatic driveway gate' },
    { src: image7967, description: 'Custom designed automatic driveway gate' },
    { src: image7945, description: 'Custom designed automatic driveway gate with solar powered operator' }

  ];

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };  

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Ashers Door Services LLC
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>About Us</h4>
        <p>
          At Asher's Door Services LLC, we bring over 20 years of experience and expertise in the garage door and driveway gate industry to homes and businesses across the beautiful island of Maui. Asher has worked with some of the largest companies on the commercial side and countless residential properties in diverse neighborhoods, earning a reputation for excellence and craftsmanship.
          <br></br>
          At Asher's Door Services LLC, we don’t just provide products—we create lasting solutions that combine functionality, security, and style, always backed by a personal touch that comes from working with a local, family-oriented business.
        </p>

        <h4>Customized Services</h4>
        <p>Our family-run business is dedicated to providing customized solutions for every client. From premium garage doors by Clopay to durable Janus roll-up doors and bespoke automatic driveway gates, we ensure every project is tailored to meet your unique needs. Whether it’s designing a one-of-a-kind gate using advanced CNC technology, installing high-quality Liftmaster operators, or repairing and maintaining your existing systems, our commitment to quality and customer satisfaction shines through in every job we do.
        </p>

        <h5>Custom Residential Services</h5>
        <p>Our residential services showcase the precision and expertise that define Asher's Door Services LLC. These featured garage doors, below, highlight a prime example of a custom installation, where overlapping doors required meticulous planning and exact spacing to ensure smooth operation. This project demonstrates our ability to tailor solutions for unique challenges, combining functionality with seamless design. Whether it's accommodating complex layouts or achieving a specific aesthetic, we take pride in delivering exceptional results that meet each client's unique needs.</p>

        {/* <!-- Gallery 1--> */}
        <div className="galleryGrid1">
          <div>
            <img onClick={() => handleImageClick(0)} src={image9120} alt="overlapping garage doors inside 1"></img>
          </div>

          <div>
            <img onClick={() => handleImageClick(1)} src={image9119} alt="overlapping garage doors inside 2"></img>
          </div>

          <div>
            <img onClick={() => handleImageClick(2)} src={image9118} alt="overlapping garage doors inside 3"></img>
          </div>

          <div>
            <img onClick={() => handleImageClick(3)} src={image9116} alt="overlapping garage doors inside 4"></img>
          </div>
        </div>

        <h5>Custom Commercial Services</h5>
        <p>Our commercial services exemplify the versatility and reliability of Asher's Door Services LLC. The showcased images highlight our expertise in custom-building commercial gates and installing durable hollow-metal roll-up doors designed to withstand heavy-duty use. In addition to new installations, we specialize in comprehensive repair services to ensure your commercial doors and gates remain fully functional and secure. Whether it’s crafting a gate to meet specific operational needs or restoring existing systems to optimal performance, we are committed to providing customized solutions that keep your business running smoothly.</p>

        {/* <!-- Gallery 2--> */}
        <div className="galleryGrid2">
        <div>
            <img onClick={() => handleImageClick(4)} src={image9580} alt="commercial hollow metal roll-up door 1"></img>
          </div>

          <div>
            <img onClick={() => handleImageClick(5)} src={image9578} alt="commercial hollow metal roll-up door 2"></img>
          </div>

          <div>
            <img onClick={() => handleImageClick(6)} src={image0630} alt="commercial drive in fence gate"></img>
          </div>

          <div>
            <img onClick={() => handleImageClick(7)} src={image0629} alt="commercial drive out fence gate"></img>
          </div>
        </div>

        <h5>Custom Automatic Driveway Gates</h5>
        <p>Our custom automatic driveway gates highlight the exceptional craftsmanship and innovation of Asher's Door Services LLC. Featured here is a stunning 28-ft-long gate, designed and built to combine elegance with functionality. Using advanced CNC technology, we brought this one-of-a-kind design to life, showcasing the limitless customization options available to our clients. Constructed with premium materials, including options like "knot wood," this gate pairs style with durability. It is equipped with a Liftmaster operator, offering choices for solar-powered or A/C-powered systems, and includes a state-of-the-art keypad entry system for enhanced convenience and security. This project is a testament to our ability to create custom solutions that make a bold statement while meeting the highest standards of quality and performance.</p>
        {/* Gallery 3 */}
        <div className="galleryGrid3">
        <div>
            <img onClick={() => handleImageClick(8)} src={image7969} alt="automatic driveway gate custom build, long 28ft. 1"></img>
          </div>

          <div>
            <img onClick={() => handleImageClick(9)} src={image7968} alt="automatic driveway gate custom build, long 28ft. 2"></img>
          </div>

          <div>
            <img onClick={() => handleImageClick(10)} src={image7967} alt="automatic driveway gate custom build, long 28ft. 3"></img>
          </div>

          <div>
            <img onClick={() => handleImageClick(11)} src={image7945} alt="automatic driveway gate custom build, long 28ft. 4"></img>
          </div>
        </div>
        <MDBContainer>
        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
            <p>
                <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/Wailuku,+HI+96793/@20.8915427,-156.551493,13z/data=!3m1!4b1!4m6!3m5!1s0x7954d3425d6317bd:0x2c6350612fb86dba!8m2!3d20.8869433!4d-156.5048344!16zL20vMHMwbmw?entry=ttu&g_ep=EgoyMDI0MTIwOC4wIKXMDSoASAFQAw%3D%3D">
                    <MDBIcon icon="home" className="me-2" />
                    Wailuku, HI 96793, US
                </a>
            </p>
            <p>
                <a href="mailto:ashersdoorservices@gmail.com">
                    <MDBIcon icon="envelope" className="me-3" />
                    ashersdoorservices@gmail.com
                </a>
            </p>
            <p>
                <a href="tel:8088668150">
                    <MDBIcon icon="phone" className="me-3" /> (808) 866 - 8150
                </a>
            </p>
        </MDBCol>
      </MDBContainer>
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
            <div style={{ textAlign: "center", position: "relative", zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
  )
}

export default AboutModal;