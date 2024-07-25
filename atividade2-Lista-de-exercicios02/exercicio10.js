/*
10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares.
*/

const prompt = require('prompt-sync')();
let total = 0;
let menor = +Infinity;
let contador = 0;
let media=0;
let contadorPar = 0;

do {
    //recebe o número
    let number = parseInt(prompt('Digite um número: '))

    //realiza a soma dos valores
    total += number;

    //verifica o menor valor
    if(number < menor){
        menor = number
    }

    //realiza a média de valores
    if(total !== 0){
        contador++
        media = total / contador
    }
    

    //verifica quantos valores são pares
    if(number % 2 == 0){
        contadorPar++
    }

    //verifica se o usuário deseja parar ou continuar inserindo valores
    let continuar = prompt('Deseja continuar (S/N)? ')
    if(continuar == 'N'){
        break
    }    
} while (true);

console.log(`O somatório de todos os valores é ${total}`)
console.log(`O menor valor informado é ${menor}`)
console.log(`A média dos valores informados é ${media}`)
console.log(`${contadorPar} valor(es) informado(s) é(são) par(es).`)