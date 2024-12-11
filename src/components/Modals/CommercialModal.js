import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { FaPhoneAlt } from "react-icons/fa";

const CommercialModal = (props) => {
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Commercial Services
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="grid-example">
            <Container>
              <Row>
                <Col xs={12} md={8}>
                  .col-xs-12 .col-md-8
                </Col>
                <Col xs={6} md={4}>
                  .col-xs-6 .col-md-4
                </Col>
              </Row>
    
              <Row>
                <Col xs={6} md={4}>
                  .col-xs-6 .col-md-4
                </Col>
                <Col xs={6} md={4}>
                  .col-xs-6 .col-md-4
                </Col>
                <Col xs={6} md={4}>
                  .col-xs-6 .col-md-4
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button href="tel:8088668150"><FaPhoneAlt className="fa-2x"/>Call us now!</Button>
          </Modal.Footer>
        </Modal>
      );
    }

export default CommercialModal;