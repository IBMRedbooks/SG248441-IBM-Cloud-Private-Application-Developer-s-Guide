//const API_KEY = "qhQsyn4dSPZ-HuD9gfclpdmGiwGfcZmaZnWA9eAtqKe4";
const API_KEY = process.env.API_KEY;

//const WATSON_TRANSLATOR_API = "http://gateway-lon.watsonplatform.net/language-translator/api/v3/translate?version=2018-05-01";

const WATSON_TRANSLATOR_API = process.env.WATSON_TRANSLATOR_API;

var auth = "Basic " + new Buffer("apikey" + ":" + API_KEY).toString("base64");

const request = require('request');


/*
 * Call Watson Translator Service to translate from English to Arabic
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
			"model_id": "en-ar"
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