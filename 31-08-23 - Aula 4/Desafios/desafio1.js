const prompt = require("prompt-sync")();
/*
Utilizando o prompt, implemente uma função recursiva que 
receba 5 números, separados por vírgula, e printe-os no 
console. 
O critério de saída da função recursiva, será a correta execução 
do programa. Enquanto os 5 valores inseridos não forem 
numéricos, ou houverem menos/mais números e posições. É 
importante mostrar quais destes valores inseridos não são 
numéricos.
 */
const Numeros = {
    hasNaN: function(array = Array()) {
        isNaN = false;
        for(let i = 0; i < array.length; i++){
            let number = Number(array[i]);

            if(Number.isNaN(number)){
                isNaN = true;
                console.log(`${array[i]} não é um número. Digite novamente!`)
            }
        }
        return isNaN;
    },
    printArray: function(array = Array()) {
        for(let i = 0; i < array.length; i++){
            console.log(`${array[i]}`);
        }
        
    },
    funcaoRecursiva: function (){
        let numeros = Array();
        numeros = prompt("Informe 5 números (separe os por virgula na mesma linha): ").split(",");
        let isNaN = this.hasNaN(numeros);

        while(numeros.length != 5 || isNaN == true)
        {
            return this.funcaoRecursiva(numeros);
        }
        return this.printArray(numeros);
    }  
}

Numeros.funcaoRecursiva();









