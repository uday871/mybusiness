const express = require('express');
const { MongoClient } = require('mongodb');
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

const EMAIL_USER = 'ggs699000@gmail.com';
const EMAIL_PASS = 'ggxe sjmy hqyn byjp'; 
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
    message: String
  });
  
  const Message = mongoose.model('mymsg', messageSchema);
  
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
  
  
  
  
  app.get('/api/messages', async (req, res) => {
    try {
      const messages = await Message.find();
      res.status(200).json(messages);
    } catch (error) {
      console.error('Error fetching messages:', error.message);
      res.status(500).json({ message: 'Failed to fetch messages.' });
    }
  });
  
  
  
  
  // API endpoint to handle reply email
  app.post('/api/reply', async (req, res) => {
    const { email, message: replyMessage } = req.body;
  
    const mailOptions = {
      from: EMAIL_USER,
      to: email,
      subject: 'Reply to Your Message',
      text: replyMessage,
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
