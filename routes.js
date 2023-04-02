const express = require('express');
const route = express.Router();
const HomeController = require('./src/Controllers/HomeController');
const ContatoController = require('./src/Controllers/ContatoController');
route.get('/', HomeController.PaginaInicial);
route.post('/', HomeController.Post);
route.get('/contato', ContatoController.PaginaInicial);
module.exports = route;