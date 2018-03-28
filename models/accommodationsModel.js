const mongoose = require('mongoose');


mongoose.connect('mongodb://makersacademy:123456@ds125469.mlab.com:25469/makersacademy', function(err) {
  if (err) throw err;

  console.log('Connection succesful')
});

var accommodationSchema = mongoose.Schema({
  // acommodationSchema to be copied here
  id: Number,
  hostId: Number,
  hostName: String,
  house: String,
  street: String,
  city: String,
  description: String,
  bedrooms: Number,
  bathrooms: Number,
  reviews: Array,
  images: Array,
  price: Number,
  bookings: Array
});


var accommodationModel = mongoose.model('accommodations', accommodationSchema);

var logthis = console.log("Accommodations Model Module Loaded")







module.exports.accommodationModel = accommodationModel