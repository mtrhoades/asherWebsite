import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// carousel images
import drivewayGate3 from './images/drivewayGate3.jpg';
import drivewayGate1 from './images/drivewayGate1.jpg';
import garageDoor3Front from './images/garageDoor3front.jpeg';
import garageDoor2Front from './images/garageDoor2Front.jpg';
// services images
import garageDoors1Front from './images/garageDoors1Front.jpg';
import commercialGate1 from './images/commercialGate1.jpg';
import drivewayGate6 from './images/drivewayGate6.jpg';
import keyPadSystems1 from './images/keypadSystems1.jpg';
// contact section
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea, MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';



function App() {
  return (
    <div className="App">

      {/* navbar */}
      <Navbar sticky="top" collapseOnSelect expand="md" className="navBar" bg="light" data-bs-theme="light">
        <Container className="nav-container">
          <Navbar.Brand href="#home" className="nav-header">
            <h1>Ashers Garage Door Services LLC</h1>
          </Navbar.Brand>
          <Nav className="nav-menu h5">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#home">Services</Nav.Link>
            <Nav.Link href="#features">Contact</Nav.Link>
            <Nav.Link href="#pricing">Reviews</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* carousel/hero */}
      <Carousel data-bs-theme="dark">
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

      {/* services */}
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

      {/* contact */}
      <h1>Contact Us</h1>
      <div className="contact-container">
        <MDBContainer>
          <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
            </MDBCol>
        </MDBContainer>

        <form id='form' className='text-center' style={{ width: '100%', maxWidth: '400px' }}>
          <MDBInput label='Name' v-model='name' wrapperClass='mb-4' />

          <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' />

          <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' />

          <MDBTextArea wrapperClass='mb-4' label='Message' />

          <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' />

          <MDBBtn color='primary' block className='my-4'>
            Send
          </MDBBtn>
        </form>
      </div>


      {/* testimonials */}
      <h2>Testimonials/reviews section here</h2>

      {/* footer */}
      <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
        <MDBContainer className='pt-4'>
          <section className='mb-4'>
            <MDBBtn
              rippleColor="dark"
              color='link'
              floating
              size="lg"
              className='text-dark m-1'
              href='#!'
              role='button'
            >
              <MDBIcon fab className='fab fa-facebook-f' />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color='link'
              floating
              size="lg"
              className='text-dark m-1'
              href='#!'
              role='button'
            >
              <MDBIcon fab className='fa-twitter' />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color='link'
              floating
              size="lg"
              className='text-dark m-1'
              href='#!'
              role='button'
            >
              <MDBIcon fab className='fa-google' />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color='link'
              floating
              size="lg"
              className='text-dark m-1'
              href='#!'
              role='button'
            >
              <MDBIcon fab className='fa-instagram' />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color='link'
              floating
              size="lg"
              className='text-dark m-1'
              href='#!'
              role='button'
            >
              <MDBIcon fab className='fa-linkedin' />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color='link'
              floating
              size="lg"
              className='text-dark m-1'
              href='#!'
              role='button'
            >
              <MDBIcon fab className='fa-github' />
            </MDBBtn>
          </section>
        </MDBContainer>

        <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2020 Copyright:
          <a className='text-dark' href='https://mdbootstrap.com/'>
            MDBootstrap.com
          </a>
        </div>
      </MDBFooter>

    </div>
  );
}

export default App;
