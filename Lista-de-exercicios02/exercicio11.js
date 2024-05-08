/*
11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os valores da sequência.
*/

const prompt = require('prompt-sync')()
let termo = parseInt(prompt('Digite o primeiro termo: '))
let razao = parseInt(prompt('Digite a razão: '))
let soma = termo;

console.log(`${termo}`)

for(let i = 1; i < 10; i++ ){
    termo += razao
    console.log(termo)
    soma += termo
}

console.log(`A soma dos valores é ${soma}`)
