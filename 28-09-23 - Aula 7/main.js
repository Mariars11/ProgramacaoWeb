const express = require('express');
const mustacheExpress = require('mustache-express');

const app = express();

const PORT = 8000;
//renderizador - motor
app.engine("html", mustacheExpress()); //html - nome usado; mustacheExpress() - construtor 

app.set("view engine", "html"); //view engine é proprio do engine
//Utiliza a pasta Views como padrao, caso seja usado um outro nome precisa dessa declaração
app.set("views", __dirname + "/views"); //views - não é o nome da pasta, é uma propriedade

app.get('/', function (req, res) {
    let usuario = {
        nome: "Maria Clara",
        telefone: 123
    }
    res.render("index.html", {usuario});
});

app.listen(PORT, function(){
    console.log(`App rodando na porta ${PORT}`)
});