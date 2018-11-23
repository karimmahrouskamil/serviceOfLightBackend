var express = require("express");
var router = express.Router();
var Makhdoumin = require("./../schema/makhdoumin");
var servants = require("./../schema/servants");
/* GET users listing. */
router.get("/servant", function (req, res, next) {
  res.json({
    "hola": "servant is here"
  });
});
router.post("/addServant", function (req, res, next) {

  servants.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
module.exports = router;