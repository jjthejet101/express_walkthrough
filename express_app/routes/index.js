var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
  res.send('You successfully created a POST route!');
});

router.get('/', function(req, res) {
  let queryName = req.query.name;
  if (queryName) {
    res.send('Welcome to the page, ' + queryName);
  } else {
    res.send('Sad, no one is here!');
  }
});

router.put('/', function(req, res) {
  res.send('You successfully created a PUT route!');
});

router.delete('/', function(req, res) {
  res.send('You successfully created a DELETE route!');
});

module.exports = router;