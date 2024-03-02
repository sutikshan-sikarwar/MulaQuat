// controllers/meetingController.js

const Meeting = require('../models/Meeting');

const startMeeting = async (req, res) => {
  try {
    const { title, startTime, endTime } = req.body;
    const meeting = new Meeting({ title, startTime, endTime });
    await meeting.save();
    res.json(meeting);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

const getMeetings = async (req, res) => {
  try {
    const meetings = await Meeting.find().populate('participants', 'username');
    res.json(meetings);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

module.exports = { startMeeting, getMeet
