var express = require('express');	
var path = require('path');

var app = express();
// Statically serve the entire client folder.
app.use(express.static(__dirname + '/../client'));
// Initially send the index.html file. 
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
})

app.listen(3000, function(){
	console.log('listening at localhost:3000')	
});