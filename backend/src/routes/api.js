const express = require('express');
const router = express.Router();

// Example route: GET request
router.get('/', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Example route: POST request
router.post('/data', (req, res) => {
  const { name, email } = req.body;
  res.json({ success: true, name, email });
});

module.exports = router;
