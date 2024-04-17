/*Escreva um algoritmo para ler o número de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.*/

const prompt = require('prompt-sync')();

let eleitores = prompt('Digite o número de eleitores: ');
let votosValidos = prompt('Digite o número de votos válidos: ');
let votosEmBranco = prompt('Digite o número de votos em branco: ');
let votosNulos = prompt('Digite o número de votos nulos: ')

let percentualVotosValido = votosValidos/eleitores*100;
let percentualVotosEmBranco = votosEmBranco/eleitores*100;
let percentualVotosNulos = votosNulos/eleitores*100;

console.log(`Percentual de votos válidos: ${percentualVotosValido}%`)
console.log(`Percentual de votos em branco: ${percentualVotosEmBranco}%`)
console.log(`Percentual de votos nulos: ${percentualVotosNulos}%`)