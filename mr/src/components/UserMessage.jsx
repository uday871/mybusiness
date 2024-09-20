import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import './UserMessage.css';

function UserMessage() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);
  const [replyMessage, setReplyMessage] = useState('');
  const [currentMessageId, setCurrentMessageId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      setIsLoading(true); // Show loading indicator
      try {
        const response = await axios.get('https://mytrend.onrender.com/api/messages');
        setMessages(response.data);
      } catch (error) {
        setError('Failed to fetch messages.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMessages();
  }, []);

  const handleReplyChange = useCallback((event) => {
    setReplyMessage(event.target.value);
  }, []);

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
      <h1>User Messages</h1>
      {error && <p className="error-message">{error}</p>}
      {isLoading && <p>Loading messages...</p>}

      <div className="message-container">
        {messages.map((msg) => (
          <div key={msg._id} className="message-box">
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
                    placeholder="Your reply..."
                    className="textarr"
                  />
                  <button onClick={handleReplySubmit} className="send-reply-btn">
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
