 //default parameters
 function somar(a = 10, b = 5){
    return a + b;
 }

//  console.log(somar());
//  console.log(somar(40,50));
//  console.log(somar(25));

function imposto(a, b = 3){
    return (a * (b / 100));
}

// console.log(imposto(600));

//rest parameters
//-> passagem de varios parametros, mas nao se sabe quantos

function incluir(...numeros){ //numeros - array
    console.log("Tamanho do array: ", numeros.length)
    numeros.forEach(param => {
        console.log(param);
    });
}

incluir(1,2,3,4,5);

//arrow function
const funcao = (a = 5,b = 9) => {
    let texto = "Printar";
    console.log(texto + " Tio Pablo");
    console.log(a+b);
}
funcao();
//o console.log("tchau"), não faz parte da funcao pegadinha
const pegadinha = () => console.log("oi"); console.log("tchau");
pegadinha();

//Arrow function x predicate
const vogais = Array('a', 'e', 'i', 'o', 'u');
console.log(vogais.find(x => x == "e").length);


const pessoas = [
    {
        nome: "Maria Clara",
        sobrenome: "Silva",
        data: new Date(2023,14, 05)
    },
    {
        nome: "Antonia",
        sobrenome: "Almeida",
        data: new Date(2012, 6, 7)
    }
];

pessoas.forEach((pessoa) => {
    console.log(`Nome: ${pessoa.nome}`)
    console.log(`Sobrenome: ${pessoa.sobrenome}`)
    console.log(`Data: ${pessoa.data.toLocaleString("pt-br")}`)
});