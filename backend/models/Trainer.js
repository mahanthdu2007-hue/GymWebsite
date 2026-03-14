const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bio: { type: String, required: true },
  certifications: [{ type: String }],
  specialty: { type: String, required: true },
  image: { type: String, required: true } // URL or path
}, { timestamps: true });

module.exports = mongoose.model('Trainer', trainerSchema);
