var path = require('path');
var bodyParser = require('body-parser');
var request = require('request');
var yelp = require('./yelp.js').yelp;

module.exports = function (app, express) {

  // Statically serve the entire client folder.
  app.use(express.static(path.join(__dirname + '/../client')));

  app.use(bodyParser.json());

  // Initially send the index.html file. 
  app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
  });

  app.post('/search', function(req,res) {
    console.log('req', req.body);
    return request(yelp({location: req.body.readableName}), function(error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body).status(200) 
      } else {
        console.log(body)
        console.log('failed')
        res.sendStatus(400)
      };
    });
  });
};