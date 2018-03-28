var models = require('./accommodationsModel');
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false // maybe set as true for objects that are not strings or arrays?? ie. Numbers
}));
