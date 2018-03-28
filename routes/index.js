var express = require('express');
var router = express.Router();
var acom = require('../models/accommodationsModel.js')
// acom.accommodationModel(insertCollectedHouseData)

/* GET home page. */
router.get('/', function(req, res, next) {

  console.log(houseData);
  console.log(newHouse);


  res.render('index', {
    title: 'Team Awesome!!!!'
  });

});


// POST A NEW ACCOMODATION TO THE DB
router.post('/new/accomodation', function(req, res, next) {


  var houseData = {
    hostName: req.body,
    house: req.body,
    street: req.body,
    city: req.body,
    description: req.body,
    bedrooms: req.body,
    bathrooms: req.body,
    reviews: req.body,
    images: req.body,
    price: req.body,
    bookings: req.body
  }

  var newHouse = acom.accommodationModel(houseData)
})

module.exports = router;