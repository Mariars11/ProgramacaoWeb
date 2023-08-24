// x === y -> igual em valor e tipo
// x !== y -> é diferente de y em tipo ou valor

const num = Number(1);
const num_string = String(1);

let isIgual = num === num_string;
console.log(isIgual);

let isDiferente = num !== num_string;
console.log(isDiferente);
//for in -> intera sobre as propriedades de um objeto
//foreach -> difereça apenas na sintaxe

const hora = Number(15);
let cumprimento = String();

if(hora < 12){
    cumprimento = "Bom dia!";
}
    else if(hora < 18){
        cumprimento = "Boa tarde!";
    }
        else{
            cumprimento = "Boa noite!";
        }

console.log(cumprimento);

const diaDaSemana = 9;
let nomeDiaSemana = String();

switch (diaDaSemana) {
    case 0:
        nomeDiaSemana = "Domingo";
        break;
    case 1:
        nomeDiaSemana = "Segunda";
        break;
    case 2:
        nomeDiaSemana = "Terça";
        break;
    case 3:
        nomeDiaSemana = "Quarta";
        break;
    case 4:
        nomeDiaSemana = "Quinta";
        break;
    case 5:
        nomeDiaSemana = "Sexta";
        break;
    case 6:
        nomeDiaSemana = "Sábado";
        break;                                                
    default:
        nomeDiaSemana = "Não encontrado!";
        break;
}
console.log(nomeDiaSemana);
//declaração de um array
const nomeDiasDaSemana = [
    "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"
];

for(let i = 0; i< nomeDiasDaSemana.length; i++){
    nomeDiaSemana = nomeDiasDaSemana[i]
    console.log(nomeDiaSemana);
}

const carro = {
    modelo: "Fiat Uno",
    ano: 2023,
    cor: "Vermelho"
};

for(const key in carro){
    const elemento = carro[key];
    console.log(`${key} - ${elemento}`);
}
let j = 0;
while(j < nomeDiasDaSemana.length){
    console.log(nomeDiasDaSemana[j]);
    j++;
}
j = 0;
do{
    console.log(nomeDiasDaSemana[j])
    j++;
}while(j < nomeDiasDaSemana.length)
