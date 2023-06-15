exports.globalMiddleware=(req, res, next )=>{
    console.log('Middleware Global');
    next();
};
exports.ParseMiddleware=(req, res, next )=>{
    console.log('Middleware Parcial');
    next();
};