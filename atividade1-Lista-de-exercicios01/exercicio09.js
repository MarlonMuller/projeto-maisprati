/*
9. Escreva um algoritmo que leia o código de origem de um produto e imprima a região
do mesmo, conforme a tabela abaixo:
1 - Sul
2 - Norte
3 - Leste
4 - Oeste
5 até 6 - Nordeste
7 até 9 - Sudeste
10 até 20 - Centro-Oeste
25 até 50 - Nordeste
Fora dos intervalos - produto importado
*/

const prompt = require('prompt-sync')();

let codigoOrigem = parseInt(prompt('Digite o código de origem: '))

if(codigoOrigem == 1) {
    console.log('Sul')
} else if (codigoOrigem == 2){
    console.log('Norte')
} else if (codigoOrigem == 3) {
    console.log('Leste')
} else if (codigoOrigem == 4) {
    console.log('Oeste')
} else if (codigoOrigem >= 5 && codigoOrigem <= 6 || codigoOrigem >= 25 && codigoOrigem <= 50) {
    console.log('Nordeste')
} else if (codigoOrigem >= 7 && codigoOrigem <= 9) {
    console.log('Sudeste')
} else if (codigoOrigem >= 10 && codigoOrigem <= 20) {
    console.log('Centro-Oeste')
} else {
    console.log('Produto importado')
}