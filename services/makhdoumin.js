var Promise = require('promise');
var makhdouminModel = require('../model/makhdoumin')

getMakhdouminData = function () {
    console.log("service is runing");
    return new Promise(function (resolve, reject) {
        makhdouminModel.getMakhdouminData().then((result) => {
            resolve(result)
            console.log("pre calllll");
        }).catch((err) => {
            console.log(err);

        });




    })
}
module.exports = {
    getMakhdouminData: getMakhdouminData
}