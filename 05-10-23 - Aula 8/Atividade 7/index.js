//npm install --save body-parser
//npm install express@4.18.2 
//npm install mustache-express@1.3.2

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
    cpf: String(),
    endereco: String(),
    dataNasc: Date(),
    uf: String(),
    cep: String(),
    email: String(),
    especialidade: String(),
    infAdic: String(),
    medAlerg: String(),
    dataAtendimento: Date()
};

app.post('/dados', function(req, res) {
    dados.nome = req.body.nome;
    dados.telefone = req.body.telefone; 
    dados.endereco = req.body.endereco;
    dados.cpf = req.body.cpf;
    dados.dataNasc = req.body.dataNascimento;
    dados.uf = req.body.uf;
    dados.cep = req.body.cep;
    dados.email = req.body.email;
    dados.especialidade = req.body.especialidade;
    dados.infAdic = req.body.infAdicionais;
    dados.medAlerg = req.body.medicamentoAlergia;
    dados.medAlerg = req.body.dataAtendimento;

    res.redirect("/dados");
});

app.get('/dados', function(req, res) {
    let erro_form = false;
    let campoVazio = String();
    if(dados.nome == ""){
        erro_form = true;
        campoVazio += "nome, "
    }
    if(dados.dataNasc == ""){
        erro_form = true;
        campoVazio += "data nascimento, "
    }
    if(dados.endereco == ""){
        erro_form = true;
        campoVazio += "endereço, "
    }
    if(dados.telefone == ""){
        erro_form = true;
        campoVazio += "telefone, "
    }
    if(dados.cep == ""){
        erro_form = true;
        campoVazio += "cep, "
    }
    if(dados.cpf == ""){
        erro_form = true;
        campoVazio += "cpf, "
    }
    if(dados.email == ""){
        erro_form = true;
        campoVazio += "email, "
    }
    if(dados.especialidade == ""){
        erro_form = true;
        campoVazio += "especialidade, "
    }
    if(dados.infAdic == ""){
        erro_form = true;
        campoVazio += "Informação adicional, "
    }
    if(dados.uf == ""){
        erro_form = true;
        campoVazio += "UF, "
    }
    if(dados.medAlerg == ""){
        erro_form = true;
        campoVazio += "Alergia Medicamento, "
    }
    if(dados.dataAtendimento == ""){
        erro_form = true;
        campoVazio += "Data Atendimento, "
    }
    res.render("dados.html", {dados, erro_form, campoVazio});
});

app.listen(PORT, function(){
    console.log(`App rodando na porta ${PORT}`)
});