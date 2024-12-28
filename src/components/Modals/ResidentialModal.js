import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { FaPhoneAlt } from "react-icons/fa";
// videos
import garageClosingVideo from '../../videos/garageClosing.mp4';
import residentialGateVideo from '../../videos/residentialgate.mp4';
import residentialGarageVideo from '../../videos/residentialgarage.mp4';
// images
import image0131 from '../../images/Asher garage images/residential/servicesimages/IMG_0131.jpg';
import image6915 from '../../images/Asher garage images/residential/servicesimages/IMG_6915.jpeg';
import image6959 from '../../images/Asher garage images/residential/servicesimages/IMG_6959.jpeg';
import image6960 from '../../images/Asher garage images/residential/servicesimages/IMG_6960.jpeg';

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
          <Row>
            <Col xl={12} md={8}>
              Garage Doors, Remote programming, Gates, Side Doors, etc.
            </Col>
          </Row>

          <Col>
            <Row xl={6} md={4}>
              <video source src="{garageClosingVideo}" type="video/webm" controls width="350"></video>
              {/* <img src={residentialGarageImg}></img> */}
              </Row>
            <Row xl={6} md={4}>
              <video source src={residentialGateVideo} type="video/webm" controls width="350"></video>
              {/* <img src={residentialGarageImg2}></img> */}
            </Row>
            <Row xl={6} md={4}>
              <video source src={residentialGarageVideo} type="video/webm" controls width="322.5"></video>
              {/* <img src={residentialGateImg}></img> */}
            </Row>
          </Col>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button href="tel:8088668150"><FaPhoneAlt className="fa-2x"/>Call us now!</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ResidentialModal;
