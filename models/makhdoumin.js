var mongoose = require("mongoose");
const AddressSchema = new mongoose.Schema({
  buildingNumber: String,
  streetName: String,
  floorNumber: Number,
  flatNumber: Number,
  zone: String,
  remarks: String
}, {
  _id: false,
  name: 'Address'
});
const PhonesSchema = new mongoose.Schema({
  // [{type: Number}] for array
  MobilePhone: Number,
  HomePhone: Number,
  fatherPhone: Number,
  motherPhone: Number
}, {
  _id: false,
  name: 'Mobiles'
});
const OnlineSchema = new mongoose.Schema({
  facebook: String,
  email: String
}, {
  _id: false,
  name: 'Online'
});
const PersonalSchema = new mongoose.Schema({
  name: String,
  address: AddressSchema,
  Mobiles: PhonesSchema,
  onlineInfo: OnlineSchema,
  birthDate: Date,
  school: String

}, {
  _id: false,
  name: 'Personal'
});
const churchAndSpiritualInfoSchema = new mongoose.Schema({
  class: String,
  fatherOfConfession: String,
  servantFollowing: String,
  chomosya: String,
  Notes: String

}, {
  _id: false,
  name: 'ChurchAndSpiritual'
});
var MakhdouminSchema = new mongoose.Schema({
  personalInfo: PersonalSchema,
  churchAndSpiritualInfo: churchAndSpiritualInfoSchema,
  DateOfCreation: {
    type: Date,
    default: Date.now
  }

}, {
  collection: "makhdoumin"
});


module.exports = mongoose.model("makhdoumin", MakhdouminSchema);