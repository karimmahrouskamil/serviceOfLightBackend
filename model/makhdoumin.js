var Makhdoumin = require("./../schema/makhdoumin");
var servants = require("./../schema/servants");
var Promise = require('promise');

getMakhdouminData = function () {
    console.log("service is runing");
    return new Promise(function (resolve, reject) {
        Makhdoumin.find(function (err, data) {
            if (data) {
                resolve(data)
            } else {
                reject(err)
            }

            console.log("dataa>>>");

        })


    })
}
module.exports = {
    getMakhdouminData: getMakhdouminData
}