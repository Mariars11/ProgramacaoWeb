//Testeando resultados 

    /*
        let num = Number(); inicialização - resultado 0
        let num = Number(1.0); resultado 1
        let num = Number(undefined);  resultado NaN
        let num = Number(null); resultado 0
        let num = Number(""); resultado 0
        let num = Number(false); resultado 0
        console.log(num); 
    */
   
const numA = 1;
const numB = 5;
const numC = 3000.4897;
console.log('Resultado da soma entre', numA, 'e', numB, 'é', numA + numB);
console.log('Resultado da soma entre '+  numA+  ' e '+  numB+  ' é '+  (numA + numB));
console.log(`Resultado da soma entre ${numA} e ${numB} é ${numA + numB}`);

//propriedades do number
console.log(Number.NaN); 
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.EPSILON);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);

//Metodos 
console.log(numA);
console.log(numA.toString());
//uso de moedas
console.log(numC.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
console.log(numC.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'}));

console.log(numC.toExponential(2));
console.log(numC.toFixed(2));
console.log(numC.toPrecision(5));
console.log(numC.valueOf());

console.log(Number.isNaN(numC));
console.log(Number.isInteger(numC));
console.log(Number.isFinite(numC));









