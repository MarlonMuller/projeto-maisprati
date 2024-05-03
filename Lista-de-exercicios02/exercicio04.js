/*
4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada lado deve ser menor que a soma dos outros dois.
*/
const prompt = require('prompt-sync')();
let reta1 = prompt('Digite o tamanho da 1ª reta: ');
let reta2 = prompt('Digite o tamanho da 2ª reta: ')
let reta3 = prompt('Digite o tamanho da 3ª reta: ')

if(reta1 < reta2 + reta3 && reta2 < reta1 + reta3 && reta3 < reta1 + reta2){
    console.log('É possível formar um triângulo!')
} else {
    console.log('Não é possível formar um triângulo.')
}