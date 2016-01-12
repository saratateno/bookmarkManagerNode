var express = require('express');
var router = express.Router();
var Link = require('../models/link');

router.get('/', function(req, res, next) {
  Link.find(function(err, links) {
    console.log(links);
    res.render('links/index', {links: links});
  });
});

module.exports = router;
