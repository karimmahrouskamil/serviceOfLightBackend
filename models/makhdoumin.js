var mongoose = require("mongoose");
var MakhdouminSchema = new mongoose.Schema({
  name: String,
  address: String,
  MobilePhone: Number,
  HomePhone: Number,
  zone: String,
  class: Number,
  birthDate: Date,
  fatherOfConfession: String,
  servantFollowing: String,
  chomosya: String,
  school: String,
  facebook: String,
  email: String,
  fatherPhone: Number,
  motherPhone: Number,
  Notes: String,
  DateOfCreation: { type: Date, default: Date.now }

}, {
  collection: "makhdoumin"
});
// const AddressSchema = new mongoose.Schema({
//  floorNumber: Number,
//  streetAddress: String
// }, { _id: false, name: 'Address'  });

module.exports = mongoose.model("makhdoumin", MakhdouminSchema);