// Exercício 1: Par ou ímpar

const prompt = require('prompt-sync')();

let numero = parseInt(prompt('Digite um número:'))

if(numero % 2 === 0) {
    console.log('É par')
} else {
    console.log('É ímpar')
}
