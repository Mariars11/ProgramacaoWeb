//npm install --save body-parser
const express = require('express');
const mustacheExpress = require('mustache-express');

const app = express();

const PORT = 8000;
//renderizador - motor
app.engine("html", mustacheExpress()); //html - nome usado; mustacheExpress() - construtor 
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "html"); //view engine é proprio do engine
//Utiliza a pasta Views como padrao, caso seja usado um outro nome precisa dessa declaração
app.set("views", __dirname + "/views"); //views - não é o nome da pasta, é uma propriedade

app.get('/', function (req, res) {
    res.render("index.html");
});

let dados = {
    nome: String(),
    telefone: String(),
    endereco: String(),
    data: Date(),
}

app.post('/dados', function(req, res) {
    dados.nome = req.body.nome;
    dados.telefone = req.body.telefone;
    dados.endereco = req.body.endereco;
    dados.data = req.body.dataAgendamento;

    res.redirect("/dados")
});

app.get('/dados', function(req, res) {
    res.render("dados.html", {dados});
});

app.listen(PORT, function(){
    console.log(`App rodando na porta ${PORT}`)
});