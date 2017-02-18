var express = require('express');	
var path = require('path');
var bodyParser = require('body-parser')

var app = express();
// Statically serve the entire client folder.
app.use(express.static(__dirname + '/../client'));


app.use(bodyParser.json())
// Initially send the index.html file. 
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
})

app.post('/search', function(req,res){
	console.log('req', req.body);
	res.sendStatus(200)
})

app.listen(3000, function(){
	console.log('listening at localhost:3000')	
});