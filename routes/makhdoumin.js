var express = require("express");
var router = express.Router();
var Makhdoumin = require("./../schema/makhdoumin");
var servants = require("./../schema/servants");
var Promise = require('promise');
 var makhdouminService = require('../services/makhdoumin');
// var promise = new Promise(function (resolve, reject) {
//   get('http://www.google.com', function (err, res) {
//     if (err) reject(err);
//     else resolve(res);
//   });
// });

/* GET users listing. */
router.get("/makhdoumin", function (req, res, next) {
  res.json({
    "hola": "respond with a resource"
  });
  makhdouminService.getMakhdouminData().then(function (data) {
    console.log(data+ "is hereeeee");
    
  })
});
router.post("/addMakhdoum", function (req, res, next) {
  Makhdoumin.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.post("/addMakhdouminList", function (req, res, next) {
  var AllMakhdouminData = []
  var counter = 0
  async function runAsync(testowow) {


    await Makhdoumin.create(testowow, function (err, post) {


      if (err) {
        console.log(err);

        return next(err)
      } else {
        console.log(counter++);
      };

      // console.log(post);

    });
  }
  AllMakhdouminData.forEach(function (eachMakhdoum) {

    function returnDateOfBirth(eachMakhdoumBirthDate) {
      if (eachMakhdoumBirthDate === "null" || eachMakhdoumBirthDate === null || eachMakhdoumBirthDate == null) {
        eachMakhdoumBirthDate = new Date()
        return eachMakhdoumBirthDate
      } else {
        eachMakhdoumBirthDate.toString()
        eachMakhdoumBirthDate = new Date(eachMakhdoumBirthDate)
        if ((eachMakhdoumBirthDate instanceof Date && !isNaN(eachMakhdoumBirthDate.valueOf())) == false) {
          eachMakhdoumBirthDate = new Date()
        }

      }
      return eachMakhdoumBirthDate
    }
    let makhdouminWillBeReshaped = {
      "personalInfo": {
        "name": eachMakhdoum.name,
        "address": {
          "buildingNumber": eachMakhdoum.buildingNumber,
          "streetName": eachMakhdoum.streetName,
          "floorNumber": eachMakhdoum.floorNumber,
          "flatNumber": eachMakhdoum.flatNumber,
          "zone": eachMakhdoum.zone,
          "remarks": eachMakhdoum.remarks
        },
        "Mobiles": {
          "MobilePhone": eachMakhdoum.MobilePhone,
          "HomePhone": eachMakhdoum.HomePhone,
          "fatherPhone": eachMakhdoum.fatherPhone,
          "motherPhone": eachMakhdoum.motherPhone
        },
        "school": eachMakhdoum.school,
        "birthDate": returnDateOfBirth(eachMakhdoum.birthDate),
        "onlineInfo": {
          "facebook": eachMakhdoum.facebook,
          "email": eachMakhdoum.email
        }
      },
      "churchAndSpiritualInfo": {
        "class": eachMakhdoum.class,
        "fatherOfConfession": eachMakhdoum.fatherOfConfession,
        "servantFollowing": eachMakhdoum.servantFollowing,
        "chomosya": eachMakhdoum.chomosya,
        "Notes": eachMakhdoum.Notes
      }

    }

    runAsync(makhdouminWillBeReshaped)



  })

});
module.exports = router;