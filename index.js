const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('Chegou na rota raiz')
})

app.post('/chamados', function(req, res){
    res.send('Chegou na rota raiz')
})

app.listen(3000, function(){
    console.log('O servidor está rodando na porta 3000')
})