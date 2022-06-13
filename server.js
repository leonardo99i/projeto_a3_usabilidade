var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser')

var app = express();
var server = http.createServer(app); // criamos o server

// Quando forms forem enviados, eles serão processados com o bodyparser
app.use(bodyParser.urlencoded({extended: false}));

// Esse get ddevolve o formulário para o usuário
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './index.html'));
});

server.listen(5050, function() {
    console.log("Servidor está rodando na porta 5050.")
});

app.use('/static', express.static('static'));