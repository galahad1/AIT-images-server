const express = require('express');
const router = express.Router();
const path = require('path');


/* GET home page. */
router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname+'/../public/client-page/client-content.html'));
});

module.exports = router;
