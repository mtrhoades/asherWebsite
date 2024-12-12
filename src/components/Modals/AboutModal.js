import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaPhoneAlt } from "react-icons/fa";
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea, MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

// images
import aboutUsGarageImg from '../../images/aboutusGarageImg.jpg';
import aboutUsGarageImg2 from '../../images/aboutusGarageImg2.jpg';
import aboutUsGarageImg3 from '../../images/aboutusGarageImg3.jpeg';
import aboutUsGateImg from '../../images/aboutUsGateImg.jpg';
import aboutUsGarageImg4 from '../../images/aboutusgarageImg4.jpg';
import aboutUsWorkingImg from '../../images/aboutusworkingImg.jpg';

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
          Asher has been installing, repairing, maintaining garage doors and such since 2015. He has worked with big companies on the commercial side, and many different residential homes in all sorts of developments here on the island of Maui. Asher has lots of experience in this field and it shows through all the work he has done in the past. Please check out the gallery below.
        </p>
        {/* <!-- Gallery --> */}
        <div class="row">
          <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img
              src={aboutUsGarageImg}
              class="w-100 shadow-1-strong rounded mb-4"
              alt="garage work"
            />

            <img
              src={aboutUsGarageImg3}
              class="w-100 shadow-1-strong rounded mb-4"
              alt="more garage work"
            />
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
            <img
              src={aboutUsWorkingImg}
              class="w-100 shadow-1-strong rounded mb-4"
              alt="working on door"
            />

            <img
              src={aboutUsGarageImg2}
              class="w-100 shadow-1-strong rounded mb-4"
              alt="beautiful garage door"
            />
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
            <img
              src={aboutUsGarageImg4}
              class="w-100 shadow-1-strong rounded mb-4"
              alt="working garage door"
            />

            <img
              src={aboutUsGateImg}
              class="w-100 shadow-1-strong rounded mb-4"
              alt="gate work"
            />
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