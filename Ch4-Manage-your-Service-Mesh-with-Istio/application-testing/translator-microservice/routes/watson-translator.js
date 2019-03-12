// watson-translator.js - Watson Translator route module
var express = require('express');
var router = express.Router();

var watsonServices = require('../services/watsonServices');

router.post('/', function(req, res) {
	watsonServices.translate(req, function(err, response) {
		if (err)
			res.status(500).send('error: ' + err);
		else
			res.send(response);
	});
});

module.exports = router;