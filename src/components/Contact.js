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
                        <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/Wailuku,+HI+96793/@20.8915427,-156.551493,13z/data=!3m1!4b1!4m6!3m5!1s0x7954d3425d6317bd:0x2c6350612fb86dba!8m2!3d20.8869433!4d-156.5048344!16zL20vMHMwbmw?entry=ttu&g_ep=EgoyMDI0MTIwOC4wIKXMDSoASAFQAw%3D%3D">
                            <MDBIcon icon="home" className="me-2" />
                            Wailuku, HI 96793, US
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