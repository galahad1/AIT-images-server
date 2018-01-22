const express = require('express');
const router = express.Router();
const path = require('path');

function sleep(seconds){
  var waitUntil = new Date().getTime() + seconds*1000;
  while(new Date().getTime() < waitUntil) true;
}


/* GET users listing. */
router.get('/', (req, res) => {

  var file = Math.floor((Math.random() * 12) + 1);
  sleep(2);
  res.sendFile(path.resolve(__dirname+'/../public/img/' + file +'.jpg'));
});

module.exports = router;
