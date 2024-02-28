const express = require('express');
const router = express.Router();

// GET all meetings
router.get('/', (req, res) => {
  res.send('Welcome to the meetings API');
});

module.exports = router;
