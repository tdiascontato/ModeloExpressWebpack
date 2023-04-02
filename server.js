const express = require('express');//CRUD -> Get, Listen
const app = express();
const routes = require('./routes');
const path = require('path');
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')))
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(routes);
app.listen(4000, ()=>{
    console.log('Estou rodando no: http://localhost:4000')
})