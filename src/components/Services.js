import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// services images
import image7968 from '../images/Asher garage images/drivewaygates/servicesimages/IMG_7968.jpg';
import image0629 from '../images/Asher garage images/commercial/IMG_0629.jpg';
import image0440 from '../images/Asher garage images/residential/carouselimages/IMG_0440.jpg';
// modal imports
import ResidentialModal from './Modals/ResidentialModal';
import CommercialModal from './Modals/CommercialModal';
import DrivewaygateModal from './Modals/DrivewaygateModal';

const Services = () => {
    const [residentialModalShow, setResidentialModalShow] = useState(false);
    const [commercialModalShow, setCommercialModalShow] = useState(false);
    const [drivewaygateModalShow, setDrivewaygateModalShow] = useState(false);
  
  return (
    <div style={{marginTop: '30px'}} id="services">
      <h1 style={{color: '#386BC0'}}>Services</h1>
      <div className="cards-container">
        {/* Residential Card */}
        <Card className="card">
          <div className="card-image-container">
            <Card.Img className="cardImage" variant="top" src={image0440} />
            <div className="card-overlay">
              <Card.Title style={{fontSize: '2em'}}>Residential</Card.Title>
              <Button style={{border: '1px solid'}} variant="primary" onClick={() => setResidentialModalShow(true)}>Learn More</Button>
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
              <Card.Title style={{fontSize: '2em'}}>Commercial</Card.Title>
              <Button style={{border: '1px solid'}} variant="primary" onClick={() => setCommercialModalShow(true)}>Learn More</Button>
            </div>
          </div>
        </Card>

        {/* Commercial Modal */}
        <CommercialModal show={commercialModalShow} onHide={() => setCommercialModalShow(false)} />

        {/* Driveway gate Card */}
        <Card className="card">
          <div className="card-image-container">
            <Card.Img className="cardImage" variant="top" src={image7968} />
            <div className="card-overlay">
              <Card.Title style={{fontSize: '2em'}}>Driveway Gates</Card.Title>
              <Button style={{border: '1px solid'}} variant="primary" onClick={() => setDrivewaygateModalShow(true)}>Learn More</Button>
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
