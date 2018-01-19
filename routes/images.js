const express = require('express');
const router = express.Router();
const path = require('path');

/* GET users listing. */
router.get('/', (req, res) => {

  var file = Math.floor((Math.random() * 12) + 1);

  res.sendFile(path.resolve(__dirname+'/../public/img/' + file +'.jpg'));
});

module.exports = router;
