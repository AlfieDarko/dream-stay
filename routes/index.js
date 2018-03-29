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

router.get('/search', function(req, res) {
  res.render('search')
})

router.get('/list', function(req, res) {
  res.render('list')
})
// POST A NEW ACCOMODATION TO THE DB
router.post('/accommodations/add', function(req, res, next) {

  var houseData = {
    hostName: "admin",
    house: req.body.house,
    street: req.body.street,
    city: req.body.city,
    description: req.body.description,
    bedrooms: parseInt(req.body.bedrooms),
    bathrooms: parseInt(req.body.bathrooms),
    images: [req.body.image],
    price: parseInt(req.body.price),
  }
  console.log(houseData);
  var newHouse = acom.accommodationModel(houseData)
  newHouse.save()

  console.log(newHouse, '!!!');
  res.redirect('/search')
})

router.get('/accommodations/all', function(req, res, next) {
  acom.accommodationModel.find(function(err, houses) {
    if (err) {
      res.send(err);
    } else
      // responds with a json object of our database
      res.json(houses)
  });
})








module.exports = router;