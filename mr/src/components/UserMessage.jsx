import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserMessage.css';

function UserMessage() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);
  const [replyMessage, setReplyMessage] = useState('');
  const [currentMessageId, setCurrentMessageId] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/messages');
        setMessages(response.data);
      } catch (error) {
        setError('Failed to fetch messages.');
      }
    };

    fetchMessages();
  }, []);

  const handleReplyChange = (event) => {
    setReplyMessage(event.target.value);
  };

  const handleReplySubmit = async () => {
    const currentMessage = messages.find((msg) => msg._id === currentMessageId);

    if (currentMessage) {
      try {
        await axios.post('http://localhost:5000/api/reply', {
          email: currentMessage.email,
          message: replyMessage,
        });
        alert('Reply sent successfully!');
        setReplyMessage('');
        setCurrentMessageId(null);
      } catch (error) {
        alert('Failed to send reply.');
      }
    }
  };

  return (
    <div className="message-page">
      {error && <p className="error-message">{error}</p>}
      <div className="message-container">
        {messages.map((msg) => (
          <div key={msg._id}>
            <div className="message-row">
              <div className="msgname">{msg.name}</div>
              <div className="msgemail">{msg.email}</div>
              <button
                className="reply-button"
                onClick={() => setCurrentMessageId(msg._id)}
              >
                Reply
              </button>
            </div>
            {currentMessageId === msg._id && (
              <div className="reply-form">
                <div className="textarea-wrapper">
                  <textarea
                    value={replyMessage}
                    onChange={handleReplyChange}
                    placeholder="Write your reply here..."
                    className='textarr'
                  />
                  <button onClick={handleReplySubmit} className='send-reply-btn'>
                    Send Reply
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserMessage;
