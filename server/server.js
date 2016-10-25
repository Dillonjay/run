var express = require('express');	
var path = require('path');

var app = express();
app.use(express.static(__dirname + '/../client'));
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
})
app.get('/bower_components/angular/angular.js', function(req, res){
  res.sendFile(path.join(__dirname, '..', 'bower_components', 'angular'));
})
app.get('/bower_components/angular-route/angular-route.js', function(req, res){
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
})
app.get('/app/app.js', function(req, res){
  res.sendFile(path.join(__dirname, '..', 'client','app' ,'app.js'));
})
app.listen(3000, function(){
	console.log('listening at localhost:3000')	
});