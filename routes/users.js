var express = require("express");
var router = express.Router();
var Makhdoumin = require("./../schema/makhdoumin");
var servants = require("./../schema/servants");
/* GET users listing. */
router.get("/user", function (req, res, next) {
  res.json({
    "hola": "respond with a resource"
  });
});


module.exports = router;