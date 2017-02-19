var request = require('request');
var oauthSignature = require('oauth-signature');  
var n = require('nonce')();  
var qs = require('querystring');  

exports.yelp = function(paramaters) {
  // The type of request will be a GET
  var httpMethod = 'GET';
  // The url used 
  var url = 'http://api.yelp.com/v2/search';
  // Required oauth paramaters. 
  var requiredParameters = {
    oauth_consumer_key : process.env.oath_consumer_key,
    oauth_token : process.env.oauth_token,
    oauth_nonce : n(),
    oauth_timestamp : n().toString().substr(0,10),
    oauth_signature_method : 'HMAC-SHA1',
    oauth_version : '1.0'
  };
  // We combine all the parameters in order of importance 
  var parameters = Object.assign(paramaters , requiredParameters);
  // Set our secrets here
  var consumerSecret = process.env.consumerSecret;
  var tokenSecret = process.env.tokenSecret;
  // Then we call Yelp's Oauth 1.0a server and get a signature.
  var signature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret, { encodeSignature: false});

  // We add the signature to the list of paramters 
  parameters.oauth_signature = signature;

  // Turn the paramters object, to a query string .
  var paramURL = qs.stringify(parameters);
  // Add paramUrl to url string.
  return `${url}?${paramURL}`;  
};