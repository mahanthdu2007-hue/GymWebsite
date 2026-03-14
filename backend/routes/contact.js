const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const { protect, admin } = require('../middleware/authMiddleware');

router.post('/', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    const createdContact = await contact.save();
    res.status(201).json(createdContact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/', protect, admin, async (req, res) => {
  try {
    const contacts = await Contact.find({});
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
