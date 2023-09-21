const express = require('express');
const app = express();

const PORT = 8000;

app.listen(PORT, function(){
    console.log(`App rodando na porta ${PORT}`)
});

app.get("/", function(req, res){
    res.send("App Web Revisao");
});

app.get("/Hello", function(req, res){
    res.send("Olá, mundo");
});

app.get("/Hello/:n", function(req, res){
   let nome = req.params.n;
   res.send(`Olá, ${nome}`);
});