const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
  title: String,
  description: String,
  startTime: Date,
  endTime: Date,
  participants: [String]
});

module.exports = mongoose.model('Meeting', meetingSchema);
