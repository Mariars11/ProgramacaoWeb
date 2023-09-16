//Classe construtora
class Aluno {
    
    constructor(Notas = Array()){
        this.Notas = Notas;
    }
    
    calcularMedia(){
        let media = Number();
        let soma = Number();
        for(let i = 0; i < this.Notas.length; i++){
            soma += this.Notas[i];
        }

        media = soma / this.Notas.length;

        return media;
    }
}

let aluno1 = new Aluno([7.5, 8.5, 9.5, 7]); //Notas

function callback(calcularMedia) {
    let media = Number();
    media = calcularMedia();

    if(media >= 7){
        console.log("Aprovado!");
    }
    else{
        console.log("Reprovado!");
    }
}

callback(() => aluno1.calcularMedia()); //Recebe a media e informa se o aluno foi aprovado ou nao