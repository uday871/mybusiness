import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import talk from './images/talk.webp';
import './Talk.css';

function Talk() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post('https://mytrend.onrender.com/api/messages', { name, email, message });
      if (response.data.success) {
        toast.success('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleNameChange = useCallback((e) => setName(e.target.value), []);
  const handleEmailChange = useCallback((e) => setEmail(e.target.value), []);
  const handleMessageChange = useCallback((e) => setMessage(e.target.value), []);

  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact Us</title>
        <meta name="description" content="Send us a message to get in touch or ask any questions. We'd love to hear from you!" />
        <meta name="keywords" content="contact, message, support, talk, help, send message" />
      </Helmet>

      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />

      <main>
        <section className="contact-left">
          <img src={talk} alt="Talk to Us - Contact" className="banner-image" />
        </section>

        <section className="contact-right">
          <div className="contact-form">
            <h1>Message Me </h1>
            <h2>Join Us</h2>
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
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Talk;