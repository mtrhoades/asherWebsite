import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// services images
import garageDoors1Front from '../images/garageDoors1Front.jpg';
import commercialGate1 from '../images/commercialGate1.jpg';
import drivewayGate6 from '../images/drivewayGate6.jpg';
import keyPadSystems1 from '../images/keypadSystems1.jpg';
// modal imports
import ResidentialModal from './Modals/ResidentialModal';
import CommercialModal from './Modals/CommercialModal';
import DrivewaygateModal from './Modals/DrivewaygateModal';
import KeypadsystemsModal from './Modals/KeypadsystemsModal';

const Services = () => {
    const [residentialModalShow, setResidentialModalShow] = useState(false);
    const [commercialModalShow, setCommercialModalShow] = useState(false);
    const [drivewaygateModalShow, setDrivewaygateModalShow] = useState(false);
    const [keypadsystemsModalShow, setKeypadsystemsModalShow] = useState(false);
  
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
              <Button variant="primary" onClick={() => setResidentialModalShow(true)}>Learn More</Button>
            </div>
          </div>
        </Card>

        {/* Residential Modal */}
        <ResidentialModal show={residentialModalShow} onHide={() => setResidentialModalShow(false)} />

        {/* Commercial Card */}
        <Card className="card">
          <div className="card-image-container">
            <Card.Img className="cardImage" variant="top" src={commercialGate1} />
            <div className="card-overlay">
              <Card.Title>Commercial</Card.Title>
              <Button variant="primary" onClick={() => setCommercialModalShow(true)}>Learn More</Button>
            </div>
          </div>
        </Card>

        {/* Commercial Modal */}
        <CommercialModal show={commercialModalShow} onHide={() => setCommercialModalShow(false)} />

        {/* Driveway gate Card */}
        <Card className="card">
          <div className="card-image-container">
            <Card.Img className="cardImage" variant="top" src={drivewayGate6} />
            <div className="card-overlay">
              <Card.Title>Driveway Gates</Card.Title>
              <Button variant="primary" onClick={() => setDrivewaygateModalShow(true)}>Learn More</Button>
            </div>
          </div>
        </Card>

        {/* Driveway gate Modal */}
        <DrivewaygateModal show={drivewaygateModalShow} onHide={() => setDrivewaygateModalShow(false)} />

        {/* Keypad systems Card */}
        <Card className="card">
          <div className="card-image-container">
            <Card.Img className="cardImage" variant="top" src={keyPadSystems1} />
            <div className="card-overlay">
              <Card.Title>Key Pad Systems</Card.Title>
              <Button variant="primary" onClick={() => setKeypadsystemsModalShow(true)}>Learn More</Button>
            </div>
          </div>
        </Card>

        {/* Keypad systems Modal */}
        <KeypadsystemsModal show={keypadsystemsModalShow} onHide={() => setKeypadsystemsModalShow(false)} />

      </div>
    </div>
  );
};

export default Services;
