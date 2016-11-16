//El index.js actua de controlador 
var express = require('express');

var app = express();

var things = require('./things.js'); 
//both index.js and things.js should be in same directory
app.use('/', things); 

app.listen(3001, function() {
  console.log('Servidor funcionando en http://localhost:3001');
});

