/*
10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares.
*/

const prompt = require('prompt-sync')()
let soma = 0
let menorValor = Infinity
let contador = 0
let pares = 0

do{
    let valor = parseInt(prompt('Digite um valor: '))

    soma += valor
    contador++
    if(valor < menorValor) {
        menorValor = valor
    }
    
    if(valor % 2 == 0) {
        pares++
    }


    let continuar = prompt('Deseja continuar? (s/n)')
    if(continuar.toLowerCase() !== 's') {
        console.log(`Obrigado por participar!\nO somatório de todos os valores é ${soma}\nO menor valor informado foi ${menorValor}\nA média dos valores informados é ${(soma/contador).toFixed(2)}\nA quantidade de valores pares é ${pares}`)
        break
    }

} while (true)








