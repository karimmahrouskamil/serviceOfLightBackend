var mongoose = require("mongoose");
const AddressSchema = new mongoose.Schema({
  floorNumber: Number,
  streetAddress: String
}, {
  _id: false,
  name: 'Address'
});

var MakhdouminSchema = new mongoose.Schema({
  name: String,
  address: AddressSchema,
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
  DateOfCreation: {
    type: Date,
    default: Date.now
  }

}, {
  collection: "makhdoumin"
});


module.exports = mongoose.model("makhdoumin", MakhdouminSchema);