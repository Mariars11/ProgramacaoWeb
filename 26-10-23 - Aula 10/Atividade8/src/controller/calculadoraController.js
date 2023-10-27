const calculadora = require('../calculadora/calculadora');

function indexView(req,res){
    res.render('index.html');
}
let resultado = String();

function calcular(req, res){
    let n1 = req.body.n1;
    let n2 = req.body.n2;

    switch (req.body.opcoes) {
        case '+':
            resultado =  `${n1} + ${n2} = ${calculadora.somar(n1, n2)}`
            break;
        case '-':
            resultado =  `${n1} - ${n2} = ${calculadora.subtrair(n1, n2)}`
            break;
        case '*':
            resultado =  `${n1} x ${n2} = ${calculadora.multiplicar(n1, n2)}`
            break;
        case '/':
            resultado =  `${n1} / ${n2} = ${calculadora.dividir(n1, n2)}`
            break;
        default:
            break;
    }
    res.render("resultado.html", {resultado});
}

module.exports ={
    indexView,
    calcular
}