const router = require('express').Router();

/* GET tests listing. */
router.get('/', function(req, res) {
  res.render('test');
});

module.exports = router;
