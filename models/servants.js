var mongoose = require("mongoose");

var servantsSchema = new mongoose.Schema({
  personalInfo: String,
  DateOfCreation: {
    type: Date,
    default: Date.now
  }

}, {
  collection: "Servants"
});


module.exports = mongoose.model("Servants", servantsSchema);