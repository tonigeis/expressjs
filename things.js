var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('Hola mundo!! Express!!');
});

router.get('/hello', function(req, res) {
  res.send('Hello world!!');
});

router.post('/hello', function(req, res) {
  res.send('POST - Hello world!!');
});

router.get('/bienvenido/:nombre', function(req, res) {
  res.send('Bienvenido!! ' + req.params.nombre + '!!');
});

router.get('/hotel/:id', function(req, res){
	//Obtengo datos del hotel id en BBDD
    res.send('El hotel con id ' + req.params.id + ' tiene estas caracteristicas');
});

router.get('/things/:id([0-9]{5})', function(req, res){
    res.send('id: ' + req.params.id);
});

//export this router to use in our index.js
module.exports = router;