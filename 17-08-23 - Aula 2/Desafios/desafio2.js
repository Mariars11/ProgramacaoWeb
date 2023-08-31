/*
    Faça um algoritmo de multiplicação de matrizes: A x B = C;
    É primordial que o número de colunas da primeira matriz seja igual ao número
    de linhas da segunda matriz. Se for diferente, o algoritmo deve informar “Não é
    possível calcular”;
*/

let matrizA = [[1,3], [2,5]]; 
let matrizB = [[2,2], [0,1]];
let matrizC = Array(matrizA.length); //matriz resultante

console.table(matrizA);
console.table(matrizB);
//Para conferir se a coluna de A é igual a linhas de B
const colunasA = matrizA[0].length; 
const linhasB = matrizB.length;

// console.log(colunasA);
// console.log(linhasB);

if(colunasA == linhasB){
    /*for(let i = 0; i < matrizA.length; i++){
        for(let j = 0; j < colunasA; j++){
           // console.log(matrizA[i][j]);
        }
    }
    //console.log("Matriz B")
    for(let i = 0; i < matrizB[0].length; i++){
        for(let j = 0; j < matrizB.length; j++){
           // console.log(matrizB[j][i]);
        }
    } */
    //Torna a matrizC bidimensional
    for(let i = 0; i < matrizB[0].length; i++){
        matrizC[i] = [];
    }
    //console.log("multiplicações");
    let soma = String(); //inicializa soma
    
    for(let i = 0; i < matrizA.length; i++){ //linhas de A
        for(let j = 0; j < colunasA; j++){ //Colunas de A
            //console.log(`${matrizA[i][j]} * ${matrizB[j][i]} = ${matrizA[i][j] * matrizB[j][i]}`);
            if(j != (colunasA - 1))
                soma += `${matrizA[i][j]} * ${matrizB[j][i]} + `;
            else
                soma += `${matrizA[i][j]} * ${matrizB[j][i]}`;
            //(j < (colunasA - 1) ? " + " : ""); -> if e else if numa linha só
        }
        //console.log(soma);
        matrizC[i] = soma;
        soma = ""; //limpa a soma para a proxima iteração
    }
    //console.log("Matriz B")
    
    console.table(matrizC);
}
else{
    console.log("Não é possível calcular");
}

