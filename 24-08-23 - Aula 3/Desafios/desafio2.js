/*
    Crie uma função que recebe uma String e retorna um Array
    com as palavras distintas da String recebida.
*/

function PalavrasDistintas(frase){
    let frase_string = String(frase);
    let ArrayDePalavras = frase_string.split(" "); 
    
    return ArrayDePalavras;
}

let array_palavras = PalavrasDistintas("Maria Clara Rodrigues Silva");

array_palavras.forEach(item => {
    console.log(item);
});

console.log("\n");

array_palavras = PalavrasDistintas("ANTONIO AUGUSTO PINTO GAMA DOS SANTOS");

array_palavras.forEach(item => {
    console.log(item);
});