/*
11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
NEGATIVO.
*/

const prompt = require('prompt-sync')();

let input = parseInt(prompt('Digite um valor: '))

while (input > 0 ) {
    if(input % 2 == 0) {
        console.log(`O valor ${input} é PAR`)
    } else {
        console.log(`O valor ${input} é ÍMPAR`)
    }
    input = parseInt(prompt('Digite um valor: '))
}