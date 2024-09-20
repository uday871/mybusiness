const express = require('express');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const compression = require('compression');
const sitemap = require('express-sitemap-xml');
require('dotenv').config();

const app = express();

app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
app.use(compression());

const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : '*',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use('/api/', limiter);

app.use(express.json({ limit: '10kb' }));

const mongoDbUrl = process.env.MONGODB_URI;
mongoose
  .connect(mongoDbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: EMAIL_USER, pass: EMAIL_PASS },
});

const messageSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  message: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now },
});

const userDataSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  message: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now },
});

const Message = mongoose.model('userMessage', messageSchema);
const UserData = mongoose.model('UserData', userDataSchema);

app.post('/api/messages', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(201).json({ success: true, message: 'Message saved successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

app.get('/api/messages', async (req, res) => {
  try {
    const messages = await Message.find().select('-__v').sort('-createdAt');
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch messages' });
  }
});

app.post('/api/reply', async (req, res) => {
  try {
    const { email, message: replyMessage, originalMessage } = req.body;
    const mailOptions = {
      from: EMAIL_USER,
      to: email,
      subject: 'Reply to Your Message',
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
          <h2 style="color: #3498db;">Hello,</h2>
          <img src="https://www.thepixelfreak.co.uk/wp-content/uploads/2019/05/Entwined-M-Logo.png" alt="Company Logo" style="max-width: 100px;" />
          <p>Thank you for reaching out to us. We have received your message and here's our reply:</p>
          <div style="padding: 10px 20px; background-color: #f9f9f9; border-left: 4px solid #3498db; margin: 20px 0;">
            <p>${replyMessage}</p>
          </div>
          <p>If you have any more questions or need further assistance, feel free to respond to this email.</p>
          <p>Best regards,<br>Your Company</p>
          <hr style="margin: 40px 0;">
          <p style="font-size: 14px; color: #999;">This is a reply to your message:</p>
          <blockquote style="font-size: 14px; color: #555; margin-left: 20px; padding-left: 10px; border-left: 3px solid #ccc;">
            <p>"${originalMessage}"</p>
          </blockquote>
        </div>
      `,
    };
    await transport.sendMail(mailOptions);
    res.status(200).json({ message: 'Reply sent successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send reply' });
  }
});

app.post('/api/userdata', async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;
    const newUserData = new UserData({ name, phone, email, message });
    await newUserData.save();
    res.status(201).json({ message: 'User data saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving user data' });
  }
});

const getUrls = () => [
  { url: '/', changefreq: 'daily', priority: 1 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/services', changefreq: 'weekly', priority: 0.9 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  { url: '/products', changefreq: 'weekly', priority: 0.8 },   
  { url: '/talk', changefreq: 'daily', priority: 0.9 },      
  { url: '/videocapture', changefreq: 'weekly', priority: 0.7 }, 
  { url: '/footeranimation', changefreq: 'monthly', priority: 0.6 }, 
  { url: '/aboutc1', changefreq: 'monthly', priority: 0.5 },  
  { url: '/contactc1', changefreq: 'monthly', priority: 0.5 }, 
  { url: '/usermessage', changefreq: 'weekly', priority: 0.9 }, 
];


const BASE_URL = process.env.BASE_URL || 'http://localhost:5173';

app.get('/sitemap.xml', sitemap(getUrls, BASE_URL));

app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.send(`User-agent: *\nAllow: /\nSitemap: ${BASE_URL}/sitemap.xml`);
});

app.use((err, req, res, next) => {
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
