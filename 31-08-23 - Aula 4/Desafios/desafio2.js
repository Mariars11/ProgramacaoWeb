/*
    Fazendo o uso de função construtora e callback, crie um 
    programa para incluir notas, calcular a média e informar se um 
    aluno foi APROVADO ou REPROVADO.
    Não é necessário utilizar o prompt, mas querendo se desafiar 
    nestes sentido mandem ver.
*/
class Aluno {
    constructor(Notas = Array()){
        this.Notas = Notas;
    }
    calcularMedia(Notas = Array()){
        let media = Number();
        let soma = Number(0);
        for(let i = 0; i < Notas.length; i++){
            soma += Notas[i];
        }

        media = soma / Notas.length;

        return media;
    }
}

let aluno1 = new Aluno([7.5, 8.5, 9.5, 7])
aluno1.calcularMedia([7.5, 8.5, 9.5, 7]);