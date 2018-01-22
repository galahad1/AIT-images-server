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



router.get('/13', (req, res) => {

  res.sendFile(path.resolve(__dirname+'/../public/img/13.jpg'));
});



router.get('/14', (req, res) => {
  res.sendFile(path.resolve(__dirname+'/../public/img/14.jpg'));
});




router.get('/15', (req, res) => {
  res.sendFile(path.resolve(__dirname+'/../public/img/15.jpg'));

});


router.get('/16', (req, res) => {

  res.sendFile(path.resolve(__dirname+'/../public/img/16.jpg'));

});



router.get('/17', (req, res) => {

  res.sendFile(path.resolve(__dirname+'/../public/img/17.jpg'));

});


router.get('/18', (req, res) => {

  res.sendFile(path.resolve(__dirname+'/../public/img/18.jpg'));

});

router.get('/19', (req, res) => {

  res.sendFile(path.resolve(__dirname+'/../public/img/19.jpg'));

});


router.get('/20', (req, res) => {

  res.sendFile(path.resolve(__dirname+'/../public/img/20.jpg'));

});


router.get('/21', (req, res) => {

  res.sendFile(path.resolve(__dirname+'/../public/img/21.jpg'));

});

router.get('/22', (req, res) => {

  res.sendFile(path.resolve(__dirname+'/../public/img/22.jpg'));

});

module.exports = router;
