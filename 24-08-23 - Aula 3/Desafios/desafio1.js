/*
    Na calculadora criada no exercício 01, adicione uma função 
    chamada “fatorial”, que seja recursiva, que recebe 1 (um) 
    parâmetro numérico e retorna o valor do seu fatorial
*/

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
    },
    fatorial: function (n){
        if( n == 0 || n == 1){
            return 1;
        }
        while(n > 0){
            return this.fatorial(n - 1) * n
        }
        
    }
}

console.log(`!5 - ${calculadora.fatorial(5)}`);
console.log(`!1 - ${calculadora.fatorial(1)}`);
console.log(`!3 - ${calculadora.fatorial(3)}`);

