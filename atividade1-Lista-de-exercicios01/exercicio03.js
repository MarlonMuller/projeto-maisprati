/*. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
● Some 25 ao primeiro inteiro;
● Triplique o valor do segundo inteiro;
● Modifique o valor do terceiro inteiro para 12% do valor original;
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou) dos primeiros três inteiros.
*/

const prompt = require('prompt-sync')();
let primeiroNumero = parseInt(prompt('Digite o primeiro número: '));
let segundoNumero = parseInt(prompt('Digite o segundo número: '));
let terceiroNumero = parseInt(prompt('Digite o terceiro número: '));
let quartoNumero = parseInt(prompt('Digite o quarto número: '));

quartoNumero = primeiroNumero + segundoNumero + terceiroNumero;
primeiroNumero += 25;
segundoNumero *= 3;
terceiroNumero *= 0.12;


console.log(primeiroNumero, segundoNumero, terceiroNumero, quartoNumero)
