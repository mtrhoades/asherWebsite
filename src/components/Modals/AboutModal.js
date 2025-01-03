import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaPhoneAlt } from "react-icons/fa";
import { MDBContainer, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

// images for gallery 1
import image9118 from '../../images/Asher garage images/residential/servicesimages/IMG_9118.jpg';
import image9119 from '../../images/Asher garage images/residential/servicesimages/IMG_9119.jpg';
import image9120 from '../../images/Asher garage images/residential/carouselimages/IMG_9120.jpg';
import image9116 from '../../images/Asher garage images/residential/servicesimages/IMG_9116.jpg';
import image9117 from '../../images/Asher garage images/residential/servicesimages/IMG_9117.jpg';

// images for gallery 2
import image0467 from '../../images/Asher garage images/commercial/IMG_0467.jpg';
import image9578 from '../../images/Asher garage images/commercial/IMG_9578.jpg';
import image9580 from '../../images/Asher garage images/commercial/IMG_9580.jpg';
import image0629 from '../../images/Asher garage images/commercial/IMG_0629.jpg';
import image0630 from '../../images/Asher garage images/commercial/IMG_0630.jpg';

// images for gallery 3
import image7969 from '../../images/Asher garage images/drivewaygates/servicesimages/IMG_7969.jpg';
import image7968 from '../../images/Asher garage images/drivewaygates/servicesimages/IMG_7968.jpg';
import image7967 from '../../images/Asher garage images/drivewaygates/servicesimages/IMG_7967.jpg';
import image7945 from '../../images/Asher garage images/drivewaygates/servicesimages/IMG_7945.jpg';
import image9072 from '../../images/Asher garage images/drivewaygates/servicesimages/IMG_9072.jpg';

const AboutModal = (props) => {
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
          Our family-run business is dedicated to providing customized solutions for every client. From premium garage doors by Clopay to durable Janus roll-up doors and bespoke automatic driveway gates, we ensure every project is tailored to meet your unique needs. Whether it’s designing a one-of-a-kind gate using advanced CNC technology, installing high-quality Liftmaster operators, or repairing and maintaining your existing systems, our commitment to quality and customer satisfaction shines through in every job we do.
          <br></br>
          At Asher's Door Services LLC, we don’t just provide products—we create lasting solutions that combine functionality, security, and style, always backed by a personal touch that comes from working with a local, family-oriented business.
        </p>

        <h4>Residential Services</h4>
        {/* <!-- Gallery 1--> */}
        <div className="galleryGrid1">

          <div>
            <img src={image9120}></img>
          </div>

          <div>
            <img src={image9119}></img>
          </div>

          <div>
            <img src={image9118}></img>
          </div>

          {/* <div>
            <img src={image9117}></img>
          </div> */}

          {/* <div>
            <h4>Garage door installation with overlapping doors.</h4>
            <p>This particular installation was done with both garage doors overlapping each other on the ceiling, with just enough space to move past each other to work properly. This shows one of Asher's ingenuius ways of solving particular problems that may occur with your property.
            </p>
          </div> */}

          <div>
            <img src={image9116}></img>
          </div>
        </div>
        <h4>Commercial Services</h4>
        {/* <!-- Gallery 2--> */}
        <div className="galleryGrid2">
        <div>
            <img src={image9580}></img>
          </div>

          <div>
            <img src={image9578}></img>
          </div>

          <div>
            <img src={image0630}></img>
          </div>

          {/* <div>
            <h4>Hollow Metal Roll-up Doors & Commercial Gates</h4>
            <p>Asher is very comfortable working with any commercial business and is particularly good at installing hollow metal roll-up doors as seen in this gallery, as well as commercial drive-in/out gates. Any type of customization can be done.</p>
          </div> */}

          <div>
            <img src={image0629}></img>
          </div>

          {/* <div>
            <img src={image0467}></img>
          </div> */}

        </div>
        <h4>Driveway Gates</h4>
        {/* Gallery 3 */}
        <div className="galleryGrid3">
        <div>
            <img src={image7969}></img>
          </div>

          <div>
            <img src={image7968}></img>
          </div>

          <div>
            <img src={image7967}></img>
          </div>

          {/* <div>
            <img src={image9072}></img>
          </div> */}

          {/* <div>
            <h4>Customized Driveway Gates</h4>
            <p>Asher services include building customized driveway gates. As you can see in this gallery, this 28ft. long gate was custom made with a CNC machine. There are options to use solar or A/C powered devices for the operators, and of course key pad systems.</p>
          </div> */}

          <div>
            <img src={image7945}></img>
          </div>
        </div>
        <MDBContainer>
        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
            <p>
                <a target="_blank" href="https://www.google.com/maps/place/Wailuku,+HI+96793/@20.8915427,-156.551493,13z/data=!3m1!4b1!4m6!3m5!1s0x7954d3425d6317bd:0x2c6350612fb86dba!8m2!3d20.8869433!4d-156.5048344!16zL20vMHMwbmw?entry=ttu&g_ep=EgoyMDI0MTIwOC4wIKXMDSoASAFQAw%3D%3D">
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
    </Modal>
  )
}

export default AboutModal;