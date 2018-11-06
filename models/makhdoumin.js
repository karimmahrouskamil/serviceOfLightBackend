var mongoose = require("mongoose");
var MakhdouminSchema = new mongoose.Schema({
    name: String,
  address: String
}, { collection: 'makhdoumin' });
module.exports = mongoose.model("makhdoumin", MakhdouminSchema);
