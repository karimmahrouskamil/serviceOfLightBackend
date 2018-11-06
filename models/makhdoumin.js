var mongoose = require("mongoose");
var MakhdouminSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
  address: String
});
module.exports = mongoose.model("makhdoumin", MakhdouminSchema);
