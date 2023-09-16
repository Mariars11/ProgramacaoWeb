const prompt = require("prompt-sync")(); //possibilita o uso do prompt

const Numeros = {
    //Tratativa para verificar se não é um numero
    hasNaN: function(array = Array()) //Recebe o array e analisa todos os elementos
    { 
        isNaN = false;

        for(let i = 0; i < array.length; i++)
        {
            let number = Number(array[i]);

            if(Number.isNaN(number))
            {
                isNaN = true;
                console.log(`${array[i]} não é um número. Digite novamente!`)
            }
        }
        return isNaN;
    },
    printArray: function(array = Array()) 
    {
        for(let i = 0; i < array.length; i++)
        {
            console.log(`${array[i]}`);
        }
        
    },
    funcaoRecursiva: function ()
    {
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









