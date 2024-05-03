/*
1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de vida um fumante perderá e exiba o total em dias.
*/

const prompt = require('prompt-sync')();
let qtdCigarros = parseInt(prompt('Informe quantos cigarros você fuma por dia: '))
let qtdAnosFumante = parseFloat(prompt('Há quantos anos você fuma? '))

let diasPerdidos = (qtdCigarros * 10 * qtdAnosFumante * 365)/1440;

console.log(`Você ja perdeu ${diasPerdidos.toFixed(0)} dias de vida por conta do cigarro.`)