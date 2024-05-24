/*
4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois.
*/

const prompt = require('prompt-sync')()

let tamanho1 = parseInt(prompt('Digite o tamanho 1 de reta: '))
let tamanho2 = parseInt(prompt('Digite o tamanho 2 de reta: '))
let tamanho3 = parseInt(prompt('Digite o tamanho 2 de reta: '))

if (tamanho1 < tamanho2 + tamanho3 && tamanho2 < tamanho1 + tamanho3 && tamanho3 < tamanho1 + tamanho2) {
    console.log('É possível formar um triângulo!')
} else {
    console.log('Não é possível formar um triângulo!')
}





