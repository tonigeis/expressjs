var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');

var app = express();

app.set('view engine', 'ejs');
app.set('views','./views');

var things = require('./things.js'); 

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//app.use(upload.array()); // for parsing multipart/form-data

app.use(express.static('public'));
app.use('/js', express.static('js'));
app.use('/img', express.static('img'));

//Simple request time logger
app.use('/hotel', function(req, res, next){
	console.log("A new request received at " + Date.now());
	//This function call is very important. It tells that more processing is 
	//required for the current request and is in the next middleware function/route handler.
	next();
});

//both index.js and things.js should be in same directory
app.use('/', things); 

app.listen(3001, function() {
  console.log('Servidor funcionando en http://localhost:3001');
});

