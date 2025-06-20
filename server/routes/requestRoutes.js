const express = require('express');
const router = express.Router();
const Request = require('../models/Request');
const nodemailer = require('nodemailer');
require('dotenv').config();

// Email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// POST: /api/request
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, service } = req.body;

    // Save to MongoDB
    const newRequest = new Request({ name, email, phone, service });
    await newRequest.save();

    // Email to Admin (with reply-to user)
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      replyTo: email,
      subject: 'New Service Request - CodeInsight',
      text: `
New service request received from:

Name: ${name}
Email: ${email}
Phone: ${phone}
Service Requested: ${service}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Request submitted and email sent successfully.' });
  } catch (error) {
    console.error('Error submitting request:', error);
    res.status(500).json({ error: 'Failed to submit request and send email.' });
  }
});

module.exports = router;

