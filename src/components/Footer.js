import React from 'react';
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea, MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <div>
        {/* <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1' }}> */}
            <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2025 Copyright: Asher's Door Services LLC
            </div>
        {/* </MDBFooter> */}
    </div>
  )
}

export default Footer;