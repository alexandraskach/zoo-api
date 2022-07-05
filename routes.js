const express = require('express');
const router = express.Router();
const Dog = require('./models/Dog');

// Home page route.
router.get('/', function (req, res) {
  res.send('Wiki home page');
})

// dogs page route.
router.get('/dogs', async (req, res) => {
  const dogs = await Dog.find();
  res.send(dogs);
})

module.exports = router;