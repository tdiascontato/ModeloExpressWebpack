exports.PaginaInicial = (req, res) =>{
    res.render('index');
};
exports.Post = (req, res) =>{
    res.send(`Opa, meu amigo! Recebido!`);
};