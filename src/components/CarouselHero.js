import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// carousel images
import drivewayGate3 from '../images/drivewayGate3.jpg';
import drivewayGate1 from '../images/drivewayGate1.jpg';
import garageDoor3Front from '../images/garageDoor3front.jpeg';
import garageDoor2Front from '../images/garageDoor2Front.jpg';

const CarouselHero = () => {
  return (
    <div id="hero">
        <Carousel data-bs-theme="dark">
            {/* First Image */}
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={drivewayGate3}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            {/* Second Image */}
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={garageDoor3Front}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            {/* Third Image */}
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={drivewayGate1}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            {/* Fourth Image */}
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={garageDoor2Front}
                    alt="Fourth slide"
                />
                <Carousel.Caption>
                    <h5>Fourth slide label</h5>
                    <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default CarouselHero;