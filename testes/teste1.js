/*
1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dia
*/

const prompt = require('prompt-sync')()
let qtdCigarros = prompt('Digite quantos cigarros você fuma por dia: ')
let anosFumante = prompt('Digite há quantos anos você fuma: ')
let diasFumante = anosFumante * 365
let minutosPerdidosPorCigarro = 10
let minutosEmUmDia = 1440

let minutosPerdidosTotal = (qtdCigarros * diasFumante * minutosPerdidosPorCigarro) / minutosEmUmDia

console.log(`Você ja perdeu ${minutosPerdidosTotal.toFixed(0)} dias de vida.`)

