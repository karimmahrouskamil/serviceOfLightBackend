var express = require("express");
var router = express.Router();
var Makhdoumin = require("./../models/makhdoumin");
/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});
router.get("/test2", function(req, res, next) {
  Makhdoumin.find(function(err, products) {
    console.log(products);

    if (err) return next(err);
    res.json(products);
  });
});
router.post("/addUser", function(req, res, next) {
  Makhdoumin.create(req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
module.exports = router;
