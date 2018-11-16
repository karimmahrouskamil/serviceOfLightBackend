var express = require("express");
var router = express.Router();
var Makhdoumin = require("./../models/makhdoumin");
var servants = require("./../models/servants");
/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.post("/addUser", function(req, res, next) {
  Makhdoumin.create(req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
router.post("/addServants", function(req, res, next) {
  servants.create(req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
module.exports = router;
