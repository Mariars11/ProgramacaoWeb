/*
    Faça um algoritmo de multiplicação de matrizes: A x B = C;
    É primordial que o número de colunas da primeira matriz seja igual ao número
    de linhas da segunda matriz. Se for diferente, o algoritmo deve informar “Não é
    possível calcular”;
*/

let matrizA = [[1,2,3], [4,5,6]];
let matrizB = [[7,8], [9,1], [3,4]];
let matrizC = Array(matrizA.length);

console.table(matrizA);
console.table(matrizB);

const colunasA = matrizA[0].length;
const linhasB = matrizB.length;

// console.log(colunasA);
// console.log(linhasB);

if(colunasA == linhasB){
    for(let i = 0; i < matrizA.length; i++){
        for(let j = 0; j < colunasA; j++){
           // console.log(matrizA[i][j]);
        }
    }
    //console.log("Matriz B")
    for(let i = 0; i < matrizB[0].length; i++){
        for(let j = 0; j < matrizB.length; j++){
           // console.log(matrizB[j][i]);
        }
    }

    for(let i = 0; i < matrizB[0].length; i++){
        matrizC[i] = [];
    }
    //console.log("multiplicações");
    let soma = Number();
    for(let i = 0; i < matrizA.length; i++){ //linhas de A
        for(let j = 0; j < colunasA; j++){ //Colunas de A
            //console.log(`${matrizA[i][j]} * ${matrizB[j][i]} = ${matrizA[i][j] * matrizB[j][i]}`);
            soma += matrizA[i][j] * matrizB[j][i];
        }
        //console.log(soma);
        matrizC[i] = soma;
    }
    //console.log("Matriz B")
    

}
else{
    console.log("Não é possível calcular");
}
console.table(matrizC);
