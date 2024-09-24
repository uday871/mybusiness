const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const compression = require('compression');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const redis = require('redis');

dotenv.config();

const app = express();

// Security and optimization middleware
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
app.use(compression());

// CORS configuration
const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : '*',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Rate limiting to prevent abuse
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);

// Body parser
app.use(express.json({ limit: '10kb' }));

// Redis client for caching
const redisClient = redis.createClient();
redisClient.on('error', (err) => console.error('Redis error:', err));

// MongoDB connection
const mongoDbUrl = process.env.MONGODB_URI;
mongoose.connect(mongoDbUrl, {
  maxPoolSize: 10, // Use maxPoolSize instead of poolSize
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

// Define your email transporter (Nodemailer)
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: EMAIL_USER, pass: EMAIL_PASS },
});

// Define Mongoose Schemas and Models
const messageSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true, index: true },
  message: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now },
});

// Add index to improve read performance
messageSchema.index({ email: 1, createdAt: -1 });

const Message = mongoose.model('Message', messageSchema);

// Caching middleware
const cache = (req, res, next) => {
  const key = req.originalUrl;
  redisClient.get(key, (err, data) => {
    if (err) throw err;
    if (data !== null) {
      return res.status(200).json(JSON.parse(data));
    } else {
      next();
    }
  });
};

// Routes

// POST /api/messages - To receive messages
app.post('/api/messages', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save message to MongoDB
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    // Clear the Redis cache for messages
    redisClient.del('/api/messages');

    res.status(201).json({ success: true, message: 'Message saved successfully' });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// GET /api/messages - To fetch messages (with caching)
app.get('/api/messages', cache, async (req, res) => {
  try {
    const messages = await Message.find().select('-__v').sort('-createdAt');

    // Cache the response in Redis for 10 minutes
    redisClient.setex(req.originalUrl, 600, JSON.stringify(messages));

    res.status(200).json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ message: 'Failed to fetch messages' });
  }
});

// POST /api/reply - To reply to messages via email
app.post('/api/reply', async (req, res) => {
  try {
    const { email, replyMessage, originalMessage } = req.body;

    const mailOptions = {
      from: EMAIL_USER,
      to: email,
      subject: 'Reply to Your Message',
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
          <h2>Hello,</h2>
          <p>Thank you for your message. Here's our reply:</p>
          <p style="background-color: #f9f9f9; border-left: 4px solid #3498db; padding: 10px;">${replyMessage}</p>
          <hr>
          <p style="font-size: 14px; color: #555;">Original message:</p>
          <blockquote>${originalMessage}</blockquote>
        </div>
      `,
    };

    await transport.sendMail(mailOptions);

    res.status(200).json({ message: 'Reply sent successfully!' });
  } catch (error) {
    console.error('Error sending reply:', error);
    res.status(500).json({ error: 'Failed to send reply' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
