const mongoose = require('mongoose');

const ideaSchema = new mongoose.Schema({
  title: {
    type: String,
    required :true,
  },
  description: String
}, { timestamps: true });

module.exports = mongoose.model('Idea', ideaSchema);
