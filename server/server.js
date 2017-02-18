var express = require('express');	

var app = express();

require('./config.js')(app, express);


app.listen(process.env.PORT || 3000);