var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/test2', function(req, res, next) {
  res.json('Successfully removed');
});
module.exports = router;
