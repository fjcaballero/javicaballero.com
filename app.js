var express = require('express');
var app = express();

//Public files
app.use(express.static('public'));
//node_modules
app.use(express.static('node_modules'));
//node_modules
app.use(express.static('bower_components'));

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.listen(8080);

console.log('Servidor iniciado');
