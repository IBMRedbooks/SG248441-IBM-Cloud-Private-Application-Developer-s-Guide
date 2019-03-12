//Language Translator credentials provided after service creation to authenticate your service instance
const API_KEY = process.env.API_KEY;
const WATSON_TRANSLATOR_API = process.env.WATSON_TRANSLATOR_API + "/v3/translate?version=2018-05-01";

var auth = "Basic " + new Buffer("apikey" + ":" + API_KEY).toString("base64");
const request = require('request');


/*
 * Call Language Translator Service to translate from English to French
 */
exports.translate = function (req, callback) {
	var options = {
		uri: WATSON_TRANSLATOR_API,
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Authorization" : auth
		},
		json: true,
		body: {
			"text" : req.body.text,
			"model_id": "en-fr"
		}
	  };

	request(options, function (error, response, body) {
	
		if(error){
			callback(error, null);
		} else if (response.statusCode != 200){
			callback(response.statusCode,null);
		} else  {
			callback(null, body.translations[0].translation);
		}
		
	});

};
