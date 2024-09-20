import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet'; 
import talk from './images/talk.webp';
import './Talk.css';

function Talk() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/messages', { name, email, message });
      if (response.data.success) {
        setSuccess('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (error) {
      setError('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Optimizing the input handlers with useCallback to avoid unnecessary re-renders
  const handleNameChange = useCallback((e) => setName(e.target.value), []);
  const handleEmailChange = useCallback((e) => setEmail(e.target.value), []);
  const handleMessageChange = useCallback((e) => setMessage(e.target.value), []);

  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact Us - Talk with Us</title>
        <meta name="description" content="Send us a message to get in touch or ask any questions. We'd love to hear from you!" />
        <meta name="keywords" content="contact, message, support, talk, help, send message" />
      </Helmet>
      
      <header>
        <h1>Contact Us</h1>
      </header>

      <main>
        <section className="contact-left">
          <div className="contact-form">
            <h2>Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleNameChange}
                required
                className="messagername"
                placeholder="Your Name"
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                required
                className="messagergmail"
                placeholder="Your Email"
              />

              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={handleMessageChange}
                required
                className="messagermessage"
                placeholder="Your Message"
              ></textarea>

              <button type="submit" className="snedtoadmin" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send'}
              </button>

              {success && <p className="success-message">{success}</p>}
              {error && <p className="error-message">{error}</p>}
            </form>
          </div>
        </section>

        <section className="contact-right">
          <img src={talk} alt="Talk to Us - Contact" className="banner-image" />
        </section>
      </main>
    </div>
  );
}

export default Talk;
