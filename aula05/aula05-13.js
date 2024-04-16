// Pedir para o usuário para adivinhar um número entre 1 e 10
const prompt = require('prompt-sync')()
const numeroCorreto = Math.floor((Math.random() * 10) + 1)
let tentativa

do {
    tentativa = parseInt(prompt('Adivinhe o número entre 1 e 10'))
    if (tentativa < numeroCorreto) {
        console.log('Tente um número maior')
    } else if (tentativa > numeroCorreto) {
        console.log('Tente um número menor')
    }
} while (tentativa !== numeroCorreto)

console.log('Parabéns! Você acertou')