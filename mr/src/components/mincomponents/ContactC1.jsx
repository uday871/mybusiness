import React from 'react';
import './ContactC1.css'; 
import website from '../images/mrbackimg.jpg';

import AboutC2 from './AboutC2';
import Footer from './Footer';

const ContactC1 = () => {
  return (
    <>
      <div className="ContactC1">
        <div className="contactC1Imagescontainer">
          <img src={website} alt="" className="contact-image" />

          <div className="overlay">
            <h2 className="overlay-text">Contact US</h2>
          </div>
        </div>
        <AboutC2/>
        <br />
        <br />
        <br />
        <Footer/>
      </div>
    </>
  );
}

export default ContactC1;
