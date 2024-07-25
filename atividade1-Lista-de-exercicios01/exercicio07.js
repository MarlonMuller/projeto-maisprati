/*7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
*/

const prompt = require('prompt-sync')();

let quantidadeMacas = parseInt(prompt('Digite a quantidade de maçãs compradas: '))
let precoMenorQueUmaDuzia = 0.30;
let precoMaiorQueUmaDuzia = 0.25;
let total;

if ( quantidadeMacas < 12) {
    total = quantidadeMacas * precoMenorQueUmaDuzia
    console.log(`O valor total da compra é R$ ${total}`)
} else { 
    total = quantidadeMacas * precoMaiorQueUmaDuzia
    console.log(`O valor total da compra é R$ ${total}`)
}