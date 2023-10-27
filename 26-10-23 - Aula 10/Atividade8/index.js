const express = require('express');
const mustacheExpress = require('mustache-express');

const app = express();

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
app.set("views", __dirname + "/src/views"); //views - não é o nome da pasta, é uma propriedade

app.use('/', require('./src/routes/calculadoraRoutes'));
const PORT = 8000;

app.listen(PORT, function(){
    console.log(`App rodando na porta ${PORT}`)
});