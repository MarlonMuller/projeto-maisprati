/*
15. Fazer um algoritmos para receber um número decimal e o peso de cada número até que o usuário digite o número 0. Fazer a média ponderada desses números e pesos respectivos.

Utilizar somente while do exercício 14 ao 16

*/

const prompt = require('prompt-sync')();

let somaProdutos = 0;
let somaPeso = 0;

let numero = parseFloat(prompt('Digite o número do produto: '));
let peso = parseFloat(prompt('Digite o peso: '));

while( numero != 0){
    somaProdutos += numero * peso;
    somaPeso += peso;

    numero = parseFloat(prompt('Digite o número do produto: '));
    if (numero != 0){
    peso = parseFloat(prompt('Digite o peso: '))
}
}

if(somaPeso != 0) {
    console.log(`A média ponderada dos produtos é ${somaProdutos/somaPeso}`)
} else {
    console.log('Não foi possível calcular a média ponderada, pois a soma dos pesos é igual a zero.')
}