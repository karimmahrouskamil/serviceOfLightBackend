var mongoose = require("mongoose");
const AddressSchema = new mongoose.Schema({
  buildingNumber: Number,
  streetName: String,
  floorNumber: Number,
  flatNumber: Number,
  remarks: String
}, {
  _id: false,
  name: 'Address'
});
const PhonesSchema = new mongoose.Schema({
  MobilePhone: Number,
  HomePhone: Number,
  fatherPhone: Number,
  motherPhone: Number
}, {
  _id: false,
  name: 'Address'
});

var MakhdouminSchema = new mongoose.Schema({
  name: String,
  address: AddressSchema,
  Mobiles: PhonesSchema,
  zone: String,
  class: Number,
  birthDate: Date,
  fatherOfConfession: String,
  servantFollowing: String,
  chomosya: String,
  school: String,
  facebook: String,
  email: String,
  Notes: String,
  DateOfCreation: {
    type: Date,
    default: Date.now
  }

}, {
  collection: "makhdoumin"
});


module.exports = mongoose.model("makhdoumin", MakhdouminSchema);