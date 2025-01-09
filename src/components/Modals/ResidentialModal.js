import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { FaPhoneAlt } from "react-icons/fa";

// lightbox
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// videos

// images
// row 1
import image6915 from '../../images/Asher garage images/residential/servicesimages/IMG_6915.jpeg';
import image6917 from '../../images/Asher garage images/residential/servicesimages/IMG_6917.jpeg';
// row 2
import image0440 from '../../images/Asher garage images/residential/carouselimages/IMG_0440.jpg';
import image0439 from '../../images/Asher garage images/residential/servicesimages/IMG_0439.jpg';
// row 3
import image9253 from '../../images/Asher garage images/residential/carouselimages/IMG_9253.jpg';
import image9252 from '../../images/Asher garage images/residential/servicesimages/IMG_9252.jpg';

const ResidentialModal = (props) => {

  // lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: image6915, description: 'Front Garage Door (brown), newly installed' },
    { src: image6917, description: 'Back Garage Door, newly installed' },
    { src: image0440, description: 'Front Garage Door (blue), newly installed' },
    { src: image0439, description: 'Back Garage Door, newly installed' },
    { src: image9253, description: 'Front Garage Door (cedar), newly installed' },
    { src: image9252, description: 'Back Garage Door, newly installed' },
  ];

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered size="xl">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Residential Services
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
          {/* intro text here */}
          <p>At Asher's Door Services LLC, we specialize in providing top-quality residential garage door solutions tailored to meet your unique needs. With over 20 years of experience, our family-run business proudly supplies premium garage doors from trusted brands like <a target="_blank" href="https://www.clopaydoor.com/?gclsrc=aw.ds&gad_source=1&gclid=Cj0KCQiAj9m7BhD1ARIsANsIIvCj-0NDWRKvRJ_k5tv6I78l_AxMo_WaDXta1WkRVRc8x3UUcMgvxfoaAhEIEALw_wcB">Clopay</a> and reliable openers from <a target="_blank" href="https://www.liftmaster.com/">Liftmaster.</a> From installations to repairs, our team is dedicated to ensuring your garage door operates flawlessly. We also offer custom programming for remotes and personalized designs to perfectly complement your home's style. Whether you're looking for a sleek, modern look or a timeless design, we deliver exceptional craftsmanship and service you can trust.</p>

          {/* row 1 front/back images*/}
          <div className="servicesGrid">
            <div>
              <img onClick={() => handleImageClick(0)} src={image6915}></img>
              <p>Front Garage Door (brown), newly installed</p>
            </div>
            <div>
              <img onClick={() => handleImageClick(1)} src={image6917}></img>
              <p>Back Garage Door, newly installed</p>
            </div>
          </div>

          {/* row 2 front/back images*/}
          <div className="servicesGrid">
            <div>
              <img onClick={() => handleImageClick(2)} src={image0440}></img>
              <p>Front Garage Door (blue), newly installed</p>
            </div>
            <div>
              <img onClick={() => handleImageClick(3)} src={image0439}></img>
              <p>Back Garage Door, newly installed</p>
            </div>
          </div>

          {/* row 3 front/back images*/}
          <div className="servicesGrid">
            <div>
              <img onClick={() => handleImageClick(4)} src={image9253}></img>
              <p>Front Garage Door (cedar), newly installed</p>
            </div>
            <div>
              <img onClick={() => handleImageClick(5)} src={image9252}></img>
              <p>Back Garage Door, newly installed</p>
            </div>
          </div>

        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button href="tel:8088668150"><FaPhoneAlt className="fa-2x"/>Call us now!</Button>
      </Modal.Footer>
       {/* Lightbox */}
       <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={images}
        index={currentIndex}
        setIndex={setCurrentIndex}
        render={{
          slide: ({ slide }) => (
            <div style={{ textAlign: "center" }}>
              <img src={slide.src} alt={slide.description} style={{ maxWidth: "66%"}} />
              <p style={{
                color: "white",
                fontSize: "1.2rem",
              }}>
                {slide.description}
              </p>
            </div>
          ),
        }}
      />
    </Modal>
  );
};

export default ResidentialModal;
