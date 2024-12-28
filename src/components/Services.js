import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// services images
import image0343 from '../images/Asher garage images/drivewaygates/carouselimages/IMG_0343.jpg';
import image0629 from '../images/Asher garage images/commercial/IMG_0629.jpg';
import image9252 from '../images/Asher garage images/residential/servicesimages/IMG_9252.jpg';
// modal imports
import ResidentialModal from './Modals/ResidentialModal';
import CommercialModal from './Modals/CommercialModal';
import DrivewaygateModal from './Modals/DrivewaygateModal';
// import KeypadsystemsModal from './Modals/KeypadsystemsModal';

const Services = () => {
    const [residentialModalShow, setResidentialModalShow] = useState(false);
    const [commercialModalShow, setCommercialModalShow] = useState(false);
    const [drivewaygateModalShow, setDrivewaygateModalShow] = useState(false);
    // const [keypadsystemsModalShow, setKeypadsystemsModalShow] = useState(false);
  
  return (
    <div id="services">
      <h1>Services</h1>
      <div className="cards-container">
        {/* Residential Card */}
        <Card className="card">
          <div className="card-image-container">
            <Card.Img className="cardImage" variant="top" src={image9252} />
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
            <Card.Img className="cardImage" variant="top" src={image0629} />
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
            <Card.Img className="cardImage" variant="top" src={image0343} />
            <div className="card-overlay">
              <Card.Title>Driveway Gates</Card.Title>
              <Button variant="primary" onClick={() => setDrivewaygateModalShow(true)}>Learn More</Button>
            </div>
          </div>
        </Card>

        {/* Driveway gate Modal */}
        <DrivewaygateModal show={drivewaygateModalShow} onHide={() => setDrivewaygateModalShow(false)} />

        {/* Keypad systems Card */}
        {/* <Card className="card">
          <div className="card-image-container">
            <Card.Img className="cardImage" variant="top" src={keyPadSystems1} />
            <div className="card-overlay">
              <Card.Title>Key Pad Systems</Card.Title>
              <Button variant="primary" onClick={() => setKeypadsystemsModalShow(true)}>Learn More</Button>
            </div>
          </div>
        </Card> */}

        {/* Keypad systems Modal */}
        {/* <KeypadsystemsModal show={keypadsystemsModalShow} onHide={() => setKeypadsystemsModalShow(false)} /> */}

      </div>
    </div>
  );
};

export default Services;
