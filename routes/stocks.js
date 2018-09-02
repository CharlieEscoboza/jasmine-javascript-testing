// Stock route
const router = require('express').Router(),
  stocks = [
    {
      AOUE: {
        sharePrice: 20.18
      }
    }
  ];

router.get('/:symbol', function (req, res) {
  const symbol = req.params.symbol;

  const sharePrice = stocks.filter(
    value => Object.keys(value).indexOf(symbol) > -1
  ).symbol;

  const result = sharePrice || stocks[0].AOUE

  res.send(result);
})

module.exports = router;
