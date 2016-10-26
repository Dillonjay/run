var express = require('express');	
var path = require('path');

var app = express();
app.use(express.static(__dirname + '/../client'));
app.use(express.static(__dirname + '/../bower_components'));
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
})

app.listen(3000, function(){
	console.log('listening at localhost:3000')	
});