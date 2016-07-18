// Stock route
var express = require('express');
var router = express.Router();

var stocks = [
  { AOUE: {
    sharePrice: 20.18
    } }
];

router.get('/:symbol', function (req, res) {
  var symbol = req.params.symbol;

  var sharePrice = stocks.filter(function (value) {
    return Object.keys(value).indexOf(symbol) > -1;
  }).symbol;

  var result = sharePrice || stocks[0].AOUE

  res.send(result);
})

module.exports = router;
