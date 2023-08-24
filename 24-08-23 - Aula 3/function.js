function nomeDaFuncao(parametro){
    let algumaCoisa = parametro;

    return algumaCoisa;
}
saudacao();
function saudacao(){
    console.log("Hello, World!");
}

function saudar(saudacao){
    console.log(saudacao);
}
saudacao()
saudar("Olá, mundo!");

const calculadora = {
    somar: function(n1, n2){
        return n1 + n2;
    },
    subtracao: function(n1, n2){
        return n1 - n2;
    },
    multiplicar: function(n1, n2){
        return n1 * n2;
    },
    divisao: function(n1, n2){
        return n1 / n2;
    } 
}

let resultado = Number();

resultado = calculadora.somar(20, 25);
console.log(resultado);

resultado = calculadora.subtracao(25, 5);
console.log(resultado);

resultado = calculadora.multiplicar(6, 14);
console.log(resultado);

resultado = calculadora.divisao(45, 2);
console.log(resultado);

console.log(calculadora.multiplicar(6,9))
console.log(calculadora.somar(6,9))

//funcao recursiva
function contagemRegressiva(n){
    if(n > 0){
        console.log(n);
        contagemRegressiva(n - 1);
    }
    else{
        console.log("Feliz ano novo")
    }
}

contagemRegressiva(10)
