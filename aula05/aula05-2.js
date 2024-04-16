// Exercício 3 triângulo

const { parse } = require('path');

const prompt = require('prompt-sync')();

let lado1 = parseInt(prompt("Insira o comprimento do primeiro lado"));
let lado2 = parseInt(prompt("Insira o comprimento do primeiro lado"));
let lado3 = parseInt(prompt("Insira o comprimento do primeiro lado"));

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1){
    console.log("É possível formar um triângulo com essas medidas.")
} else {
    console.log("Não é possível formar um triângulo")
}