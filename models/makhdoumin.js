var mongoose = require("mongoose");
var MakhdouminSchema = new mongoose.Schema(
  {
    name: String,
    address: String,
    phone : String,
    HomePhone: String
  },
  { collection: "makhdoumin" }
);
module.exports = mongoose.model("makhdoumin", MakhdouminSchema);
