/*
8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.
*/

// falta o prompt

let numberOne = 4;
let numberTwo = 4;

if (numberOne < numberTwo) {
    console.log(numberOne, numberTwo)
} else if (numberOne > numberTwo) {
    console.log(numberTwo, numberOne)
} else {
    console.log('Não é permitido números iguais, insira os dados novamente sem repetir valores.')
}