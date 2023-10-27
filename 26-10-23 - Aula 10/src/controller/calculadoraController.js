const calculadora = require('../calc/calculadora');

function indexView(req,res){
    res.render('index.html');
}

function calcular(req, res){
    let n1 = req.body.n1;
    let n2 = req.body.n2;
    switch (req.body.opcoes) {
        case '+':
            res.send(`A soma entre ${n1} e ${n2} é igual a ${calculadora.somar(n1, n2)}`)
            break;
        case '-':
            res.send(`A subtração entre ${n1} e ${n2} é igual a ${calculadora.subtrair(n1, n2)}`)
            break;
        case '*':
            res.send(`A multiplicação entre ${n1} e ${n2} é igual a ${calculadora.multiplicar(n1, n2)}`)
            break;
        case '/':
            res.send(`A Divisão entre ${n1} e ${n2} é igual a ${calculadora.dividir(n1, n2)}`)
            break;
        default:
            break;
    }

}
module.exports ={
    indexView,
    calcular
}