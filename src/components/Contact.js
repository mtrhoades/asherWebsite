import React from 'react';
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea, MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Contact = () => {
  return (
    <div id="contact">
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
    </div>
  )
}

export default Contact;