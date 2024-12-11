import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// services images
import garageDoors1Front from '../images/garageDoors1Front.jpg';
import commercialGate1 from '../images/commercialGate1.jpg';
import drivewayGate6 from '../images/drivewayGate6.jpg';
import keyPadSystems1 from '../images/keypadSystems1.jpg';
import ResidentialModal from './Modals/ResidentialModal';

const Services = () => {
    const [modalShow, setModalShow] = useState(false);
  
  return (
    <div id="services">
      <h1>Services</h1>
      <div className="cards-container">
        {/* Residential Card */}
        <Card className="card">
          <div className="card-image-container">
            <Card.Img className="cardImage" variant="top" src={garageDoors1Front} />
            <div className="card-overlay">
              <Card.Title>Residential</Card.Title>
              {/* button here */}
              <Button variant="primary" onClick={() => setModalShow(true)}>Learn More</Button>
            </div>
          </div>
        </Card>

        {/* Residential Modal */}
        <ResidentialModal show={modalShow} onHide={() => setModalShow(false)} />

        {/* Other Cards */}
        <Card className="card">
          <div className="card-image-container">
            <Card.Img className="cardImage" variant="top" src={commercialGate1} />
            <div className="card-overlay">
              <Card.Title>Commercial</Card.Title>
              <Button variant="primary">Learn More</Button>
            </div>
          </div>
        </Card>

        <Card className="card">
          <div className="card-image-container">
            <Card.Img className="cardImage" variant="top" src={drivewayGate6} />
            <div className="card-overlay">
              <Card.Title>Driveway Gates</Card.Title>
              <Button variant="primary">Learn More</Button>
            </div>
          </div>
        </Card>

        <Card className="card">
          <div className="card-image-container">
            <Card.Img className="cardImage" variant="top" src={keyPadSystems1} />
            <div className="card-overlay">
              <Card.Title>Key Pad Systems</Card.Title>
              <Button variant="primary">Learn More</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Services;
