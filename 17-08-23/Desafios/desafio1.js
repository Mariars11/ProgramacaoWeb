//Faça um algoritmo que imprime uma matriz A e sua transposta.

//define a matriz
let matriz = Array([1,2], [3,4], [5,6]);

const colunas = matriz.length; //quantidade de colunas na transposta (3)
let linhas = matriz[0].length; //quantidade de linhas na transposta (2)

let transposta = []; // inicializa o array para a matriz transposta

    for (let i = 0; i < linhas; i++) {
        transposta[i] = []; //torna ele um array bidimensional 2 X 3
    }
    //Inversao das colunas para as linhas
    for (let j = 0; j < colunas; j++) {
        for (let i = 0; i < linhas; i++) {
            transposta[i][j] = matriz[j][i];
        }
    }
    //Impressão das matrizes
    console.table(matriz);
    console.table(transposta);
