const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const accommodationsModel = require('../models/accommodationsModel.js');


mongoose.connect('mongodb://makersacademy:123456@ds125469.mlab.com:25469/makersacademy', function(err) {
  if (err) throw err;

  console.log('Connection succesful')

});

app.get('/', function(req, res) {
  console.log('testing this works !!');
});