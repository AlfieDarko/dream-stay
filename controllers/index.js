const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

mongoose.connect('mongodb://makersacademy:123456@ds125469.mlab.com:25469/makersacademy', function(err) {
  if (err) throw err;

  console.log('Connection succesful')

});

var accommodationSchema =  mongoose.Schema({
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

var accommodationModel = mongoose.model ('accommodations', accommodationSchema);
console.log('testing this connection 1');
app.use(express.static('public'));
console.log('testing this connection 2');
app.use(bodyParser.json());
console.log('testing this connection 3');
app.use(bodyParser.urlencoded({
  extended: false // maybe set as true for objects that are not strings or arrays?? ie. Numbers
}));
console.log('testing this connection 4');

app.get('/', function(req, res) {
  console.log('testing this connection 5');
});
