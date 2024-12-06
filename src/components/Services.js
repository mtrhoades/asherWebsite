import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// services images
import garageDoors1Front from '../images/garageDoors1Front.jpg';
import commercialGate1 from '../images/commercialGate1.jpg';
import drivewayGate6 from '../images/drivewayGate6.jpg';
import keyPadSystems1 from '../images/keypadSystems1.jpg';

const Services = () => {
  return (
    <div id="services">
        <h1>Services</h1>
        <div className="cards-container">
            <Card>
                <Card.Img className="cardImage" variant="top" src={garageDoors1Front} />
                <Card.Body>
                    <Card.Title>Residential</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card>
                <Card.Img className="cardImage" variant="top" src={commercialGate1} />
                <Card.Body>
                    <Card.Title>Commercial</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card>
                <Card.Img className="cardImage" variant="top" src={drivewayGate6} />
                <Card.Body>
                    <Card.Title>Driveway Gates</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card>
                <Card.Img className="cardImage" variant="top" src={keyPadSystems1} />
                <Card.Body>
                    <Card.Title>Key Pad Systems</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    </div>
  )
}

export default Services;