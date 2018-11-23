

var Promise = require('promise');
getMakhdouminData = function () {
    console.log("service is runing");
return new Promise(function (resolve, reject) {
    let x = "serviceResolvedData"
resolve(x)
console.log("pre calllll");

})
}
module.exports = {
    getMakhdouminData: getMakhdouminData
}