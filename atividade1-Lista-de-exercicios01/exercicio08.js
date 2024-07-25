/*
8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.
*/

const prompt = require('prompt-sync')()

let numberOne = parseInt(prompt('Digite o primeiro valor: '));
let numberTwo = parseInt(prompt('Digite o segundo valor (não pode repetir o primeiro valor): '));

if (numberOne < numberTwo) {
    console.log(numberOne, numberTwo)
} else if (numberOne > numberTwo) {
    console.log(numberTwo, numberOne)
} else {
    console.log('Não é permitido números iguais, insira os dados novamente sem repetir valores.')
}