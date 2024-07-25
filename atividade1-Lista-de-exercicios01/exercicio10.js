/*
10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
*/

const prompt = require('prompt-sync')();

let numero = parseInt(prompt('Digite um valor para ser repetido dez vezes: '))
let i;

for (i = 0; i < 10; i++ ){
    console.log(numero);
}