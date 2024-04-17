/* Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o valor correspondente em graus Fahrenheit.*/

const prompt = require('prompt-sync')();

let temperaturaGrauCelsius = prompt('Digite a temperatura em graus Celsius: ')
let temperaturaGrausFahrenheit = temperaturaGrauCelsius * 1.8 + 32;

console.log(`A temperatura ${temperaturaGrauCelsius} em Graus Celsius equivale a temperatura ${temperaturaGrausFahrenheit} em graus Fahrenheit`)