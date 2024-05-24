/*
11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os valores da sequência.
*/

const prompt = require('prompt-sync')()

let primeiroTermo = parseInt(prompt('Digite o primeiro termo da razão: '))
let razao = parseInt(prompt('Digite a razão da PA: '))
let valor = primeiroTermo
let soma = 0

for(let i = 0; i < 10; i++) {
    console.log(valor)
    soma += valor
    valor += razao
}

console.log(`Soma: ${soma}`)







