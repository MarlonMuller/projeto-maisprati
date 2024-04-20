/*
14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.

Utilizar somente while do exercício 14 ao 16

*/

const prompt = require('prompt-sync')();

let numeros = parseFloat(prompt('Digite um valor decimal: '));
let contador = 0;
let soma = 0;

while( numeros != 0) {
    soma += numeros;
    contador++;
    numeros = parseFloat(prompt('Digite um valor decimal: '));
}
console.log(`A média dos números informados é: ${soma / contador}`)