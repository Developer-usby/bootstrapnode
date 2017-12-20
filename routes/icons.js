var express = require('express');
var router = express.Router();

/* GET icons page. */
router.get('/', function(req, res, next) {
    res.render('icons', { title: 'Icons' });
});
module.exports = router;
