const express = require('express');
const router = express.Router();
const path = require('path');

function sleep(seconds){
  var waitUntil = new Date().getTime() + seconds*1000;
  while(new Date().getTime() < waitUntil) true;
}


/* GET users listing. */
router.get('/', (req, res) => {

  var file = Math.floor((Math.random() * 25) + 1);

  res.sendFile(path.resolve(__dirname+'/../public/img/' + file +'.jpg'));
});



router.get('/13.jpg', (req, res) => {

  res.sendFile(path.resolve(__dirname+'/../public/img/25.jpg'));
});



router.get('/2', (req, res) => {
  res.sendFile(path.resolve(__dirname+'/../public/img/20.jpg'));
});



router.get('/3', (req, res) => {

  var file = Math.floor((Math.random() * 25) + 1);

res.sendFile(path.resolve(__dirname+'/../public/img/21.jpg'));
});

router.get('/4', (req, res) => {
  res.sendFile(path.resolve(__dirname+'/../public/img/22.jpg'));

});


router.get('/5', (req, res) => {

  res.sendFile(path.resolve(__dirname+'/../public/img/23.jpg'));

});



router.get('/6', (req, res) => {

  res.sendFile(path.resolve(__dirname+'/../public/img/24.jpg'));

});


router.get('/7', (req, res) => {

  res.sendFile(path.resolve(__dirname+'/../public/img/25.jpg'));

});

router.get('/8', (req, res) => {

  res.sendFile(path.resolve(__dirname+'/../public/img/15.jpg'));

});


router.get('/9', (req, res) => {

  res.sendFile(path.resolve(__dirname+'/../public/img/16.jpg'));

});


router.get('/10', (req, res) => {

  res.sendFile(path.resolve(__dirname+'/../public/img/17.jpg'));

});

module.exports = router;
