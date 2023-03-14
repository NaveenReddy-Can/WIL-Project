import React from 'react';
import NavsLogo from "./Assets/Images/NavsLogo.png";
import Certificate from "./Assets/Images/Certificate.png";
import Contactus from './Components/Contactus';
import Reac, { useState } from 'react';
import Modal from './modal';
import ContactUsBubble from './Components/ContactUsBubble';

const Footer = () => {

    const [showComponent, setShowComponent] = useState(false);

    const handleClick = () => {
        setShowComponent(true);
    };
    const handleCloseModal = () => {
        setShowComponent(false);
    };
    return (
        <div className='footer'>
            <div style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingRight: '50px' }}>
                <ul style={{ paddingRight: '100px', listStyle: 'none' }}>
                    <li>Dot Com Careers</li>
                    <li>About Us</li>
                </ul>
                <ul style={{ paddingRight: '100px', listStyle: 'none', textDecoration: 'none' }}>
                    <a href='contactus' style={{ textDecoration: 'inherit', color: 'inherit' }} ><li>Contact Us</li></a>
                    <li>Blog</li>
                </ul>
                <ul style={{ listStyle: 'none' }}>
                    <li>Terms And Conditions</li>
                    <li>Privacy</li>
                </ul>
                <a href='https://sbs-spe.feddevontario.canada.ca/en/how-start-technology-or-innovation-business-ontario' ><img src={Certificate} alt='certificate' style={{ height: '60px', Width: '60px', paddingLeft: '150px' }} /> </a>
            </div>

            <div style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={NavsLogo} alt='navlgo' style={{ height: '45px', Width: '40px' }} />
                <p> &nbsp; Dot Com Corporation © 2023</p>

            </div>
            <>
                {/*<button onClick={handleClick} style={{ backgroundColor: '#722F2F', color: 'White', textAlign: 'center', padding: '8px', fontWeight: 'bold', marginLeft: '1400px' }}>  Get Help  </button>
                {showComponent && <Modal onClose={handleCloseModal}> <Contactus /> </Modal>} */}
            </>
        </div >
    );
};

export default Footer;