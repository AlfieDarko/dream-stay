var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var accomSchema = require('../models/accommodationsModel.js')
/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', {
    title: 'Team Awesome!!!!'
  });

});

module.exports = router;