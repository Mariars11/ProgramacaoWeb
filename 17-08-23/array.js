const meuArray = [1 , "dois", 3]
console.log(meuArray.length);
meuArray.forEach(i => {
    console.log(i);
});

for(let i = 0; i < meuArray.length; i++){
    console.log(meuArray[i]);
}
//array de 5 posições
let array = Array(5);
console.log(array);
//array com um elemento string 5
let array2 = Array("5");
console.log(array2);

let frutas = Array("Maçã", "Banana", "Amora", "Pera");

console.log(frutas.find((item) => item.length > 5 ));

console.log(array.fill(10, 0)); //valor, a partir dessa posicao, ultima posicao

console.log(frutas.filter((item) => item.length > 4 ));

frutas.push("Pessego"); //adiciona no final
frutas.pop() //retira o ultimo
frutas.splice(1,1, "morango");
console.table(frutas);

let arrayObjeto =[{nome: "Maria", idade: 21, altura: "1.65"}, {nome: "João", idade: 25, altura: "1.80"}];

console.table(arrayObjeto);

arrayObjeto.forEach(item => {
    console.log(item.nome, item.altura, item.idade);
});

let matriz = [[1,2,3], [1,5,6]];

console.table(matriz);

let objSemConstrutor = {
    a: 1,
    b: 2,
    c: 3
};

console.log(objSemConstrutor);
console.log(typeof objSemConstrutor);

let objetos = [
    {nome: 'Maria', idade: 21, altura: 1.65},
    {nome: 'João', idade: 25, altura: 1.8}
]

console.log(objetos);

console.table(objetos);
console.table(Object.keys(objetos));
console.table(Object.values(objetos));


