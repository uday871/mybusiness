import React, { useState } from 'react';
import './AboutC2.css'; 
import website from '../images/business b1.webp';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AboutC2 = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://mytrend.onrender.com/api/userdata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Your message has been submitted successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: ''
        });
      } else {
        const errorData = await response.json();
        toast.error(`Failed to submit the message: ${errorData.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error('Error submitting the form:', error.message);
      toast.error('Error submitting the message. Please try again.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="contact-wrapperAboutC2-contact-wrapper">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
      <div className="info-sectionAboutC2-info-section">
        <h2 className='titleAboutC2-title'>WELCOME TO <span style={{borderBottom:'5px solid rgb(0,134,86)'}}>MR STUDIO</span></h2>

        <p className="intro-textAboutC2-intro-text">
            Feel free to connect with us for any of your needs regarding our services.
            Software services encompass a broad range of activities that provide support and solutions for software applications and systems. These services can be tailored to meet the unique needs of businesses, enhancing efficiency, productivity, and customer satisfaction. From development to maintenance, software services play a crucial role in the digital landscape.
        </p>
        
        <img src={website} alt="" className='AboutC2image'/>
      </div>

      <div className="form-sectionAboutC2-form-section">
        <form className="AboutC2-form" onSubmit={handleSubmit}>
          <h2 className='titleAboutC2-title' style={{borderBottom:'5px solid rgb(0,134,86)'}}>MR STUDIO</h2>
          <div className="input-groupAboutC2-input-group">
            <label htmlFor="name" className="AboutC2-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="AboutC2-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-groupAboutC2-input-group">
            <label htmlFor="phone" className="AboutC2-label">Phone No.</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your Phone Number"
              className="AboutC2-input"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-groupAboutC2-input-group">
            <label htmlFor="email" className="AboutC2-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="AboutC2-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-groupAboutC2-input-group">
            <label htmlFor="message" className="AboutC2-label">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              className="AboutC2-textarea"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-buttonAboutC2-submit-button" style={{backgroundColor:'rgb(0,134,86)'}}>Connect with MR STUDIO</button>
        </form>
      </div>
    </div>
  );
};

export default AboutC2;