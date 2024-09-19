import React from 'react';
import './AboutC2.css'; 
import website from '../images/business b1.jpeg';

const AboutC2 = () => {
  return (
    <div className="contact-wrapperAboutC2-contact-wrapper">
      <div className="info-sectionAboutC2-info-section">
        <h2 className='titleAboutC2-title'>WELCOME TO <span style={{borderBottom:'5px solid rgb(0,134,86)'}}>MR STUDI</span>O</h2>
        <p className="intro-textAboutC2-intro-text">
            Feel free to connect with us for any of your needs regarding our services.
            Software services encompass a broad range of activities that provide support and solutions for software applications and systems. These services can be tailored to meet the unique needs of businesses, enhancing efficiency, productivity, and customer satisfaction. From development to maintenance, software services play a crucial role in the digital landscape.
        </p>
        <img src={website} alt="" className='AboutC2image'/>
      </div>

      <div className="form-sectionAboutC2-form-section">
        <form className="AboutC2-form">
        <h2 className='titleAboutC2-title' style={{borderBottom:'5px solid rgb(0,134,86)'}}>MR STUDIO</h2>
          <div className="input-groupAboutC2-input-group">
            <label htmlFor="name" className="AboutC2-label">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" className="AboutC2-input" />
          </div>
          <div className="input-groupAboutC2-input-group">
            <label htmlFor="phone" className="AboutC2-label">Phone No.</label>
            <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" className="AboutC2-input" />
          </div>
          <div className="input-groupAboutC2-input-group">
            <label htmlFor="email" className="AboutC2-label">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" className="AboutC2-input" />
          </div>
          <div className="input-groupAboutC2-input-group">
            <label htmlFor="message" className="AboutC2-label">Message</label>
            <textarea id="message" name="message" placeholder="Your Message" className="AboutC2-textarea"></textarea>
          </div>
          <button type="submit" className="submit-buttonAboutC2-submit-button" style={{backgroundColor:'rgb(0,134,86)'}}>Connect with MR STUDIO</button>
        </form>
      </div>
    </div>
  );
};

export default AboutC2;
