import React from 'react';
import { MDBInput, MDBBtn, MDBTextArea, MDBContainer, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Contact = () => {
  return (
    <div style={{marginTop: '50px'}} id="contact">
        <h1 style={{color: '#386BC0'}}>Contact Us</h1>
        <div className="contact-container">
            <MDBContainer>
                <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                    <p>
                        <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/1033+Kai+Hele+Ku+St,+Lahaina,+HI+96761/@20.8580284,-156.6385867,17z/data=!3m1!4b1!4m6!3m5!1s0x79552a16b6c6156b:0x7cd3fd1dbbd86fcc!8m2!3d20.8580234!4d-156.6360118!16s%2Fg%2F11c12pxv0x?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D">
                            <MDBIcon icon="home" className="me-2" />
                            1033 Kai Hele Ku St. Lahaina, HI 96761
                        </a>
                    </p>
                    <p>
                        <a href="mailto:ashersdoorservices@gmail.com">
                            <MDBIcon icon="envelope" className="me-3" />
                            ashersdoorservices@gmail.com
                        </a>
                    </p>
                    <p>
                        <a href="tel:8088668150">
                            <MDBIcon icon="phone" className="me-3" /> (808) 866 - 8150
                        </a>
                    </p>
                </MDBCol>
            </MDBContainer>

            <form action="https://formsubmit.co/0808b71977531437c237c69e8197054d" method="POST" id='form' className='text-center contactForm'>
                <MDBInput label='Name' name="name" v-model='name' wrapperClass='mb-4' />

                <MDBInput type='email' name="email" label='Email address' v-model='email' wrapperClass='mb-4' />

                <MDBInput label='Subject' name="subject" v-model='subject' wrapperClass='mb-4' />

                <MDBTextArea wrapperClass='mb-4' name="message" label='Message' />

                <MDBBtn type="submit" color='primary' block className='my-4'>
                    Send
                </MDBBtn>
                {/* ^ have an alert to show that the email message send was successful */}
            </form>
        </div>
    </div>
  )
}

export default Contact;