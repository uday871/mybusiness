import React, { useState } from 'react';
import axios from 'axios';
import talk from './images/talk.webp'
import './Talk.css'

function Talk() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post('https://mytrend.onrender.com/api/messages', { name, email, message });
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
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-left">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className='messagername'
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='messagergmail'
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className='messagermessage'
            ></textarea>

            <button type="submit" className='snedtoadmin'>Send</button>

            {success && <p className="success-message">{success}</p>}
            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
      </div>

      <div className="contact-right">
        <img src={talk} alt="Contact Banner" className="banner-image" />
      </div>
    </div>
  );
}

export default Talk;
