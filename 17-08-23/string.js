let variavel = String();
console.log(variavel);

variavel = String("oi");
console.log(variavel);

let variavel2 = new String("Teste do uso do new");
console.log(variavel2);

console.log(variavel + variavel2);

let tamanho = String("Tamanho dessa string");
console.log(tamanho.length);

const disciplina = "Programação Web";
console.log(disciplina.slice(6));
console.log(disciplina.slice(6, 10));
console.log(disciplina.slice(-3));
console.log(disciplina.slice(-20, -2));

let stringona = `Maria Clara
Rodrigues`;

console.log(stringona, 1, 'teste', 0);
console.log(`${stringona} ${1} teste ${0}`);

console.log(disciplina.concat(stringona));



