const mongoose = require('moongose');
const express = require('express');
const app = express();

moongoose.connect('mongodb://makersacademy:123456@ds125469.mlab.com:25469/makersacademy', function(err) {
  if (err) throw err;

  console.log('Connection succesful')

});
