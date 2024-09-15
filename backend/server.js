const express = require('express');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const mongoDbUrl = "mongodb://localhost:27017";

mongoose.connect(mongoDbUrl)
.then(() => {
  console.log('MongoDB connected');
})
.catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
});

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Message = mongoose.model('Message', messageSchema);

// API endpoint to handle form submission
app.post('/api/messages', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error saving message:', error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});

// API endpoint to fetch messages
app.get('/api/messages', async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error.message);
    res.status(500).json({ message: 'Failed to fetch messages.' });
  }
});


app.post('/api/reply', async (req, res) => {
  const { email, message: replyMessage } = req.body;

  const mailOptions = {
    from: EMAIL_USER,
    to: email,
    subject: 'Reply to Your Message',
    html: `
      <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
        <h2 style="color: #3498db;">Hello,</h2>

        <img src="https://www.thepixelfreak.co.uk/wp-content/uploads/2019/05/Entwined-M-Logo.png" alt="images" style="max-width: 100px;" />

        <p>Thank you for reaching out to us. We have received your message and here's our reply:</p>
        <div style="padding: 10px 20px; background-color: #f9f9f9; border-left: 4px solid #3498db; margin: 20px 0;">
          <p>${replyMessage}</p>
        </div>
        <p>If you have any more questions or need further assistance, feel free to respond to this email.</p>
        <p>Best regards,<br>Your Company</p>
        <hr style="margin: 40px 0;">
        <p style="font-size: 14px; color: #999;">This is a reply to your message:</p>
        <blockquote style="font-size: 14px; color: #555; margin-left: 20px; padding-left: 10px; border-left: 3px solid #ccc;">
          <p>"${req.body.message}"</p>
        </blockquote>
      </div>
    `,
  };

  try {
    await transport.sendMail(mailOptions);
    res.status(200).json({ message: 'Reply sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error.message);
    res.status(500).json({ error: 'Failed to send reply.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
