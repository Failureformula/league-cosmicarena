var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'Express',
  	data: 'CosmicArena League Web Test' 
  });
});

module.exports = router;
