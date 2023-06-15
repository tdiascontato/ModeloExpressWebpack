const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const {globalMiddleware, ParseMiddleware} = require('./src/middlewares/middleware')

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(globalMiddleware);
app.use(ParseMiddleware);
app.use(routes);
app.listen(7000, ()=> {
    console.log('Estamos rodando no canal: http://localhost:7000');
});