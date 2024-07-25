/*
22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um número não determinado de pessoas e retorne a média de salário da população, a média do número de filhos, o maior salário e o percentual de pessoas com salário até R$ 350,00.
*/

const prompt = require('prompt-sync')()
let continuar
let salario
let numeroFilhos
let contador = 0
let totalSalario = 0
let totalFilhos = 0
let maiorSalario = 0
let contadorMaisQue350 = 0


do {
    salario = parseInt(prompt('Digite o seu salário (R$): '))
    numeroFilhos = parseInt(prompt('Digite a número de filhos: '))
    totalSalario += salario
    totalFilhos += numeroFilhos
    contador++
    if(salario > maiorSalario){
        maiorSalario = salario
    }
    if(salario > 350){
        contadorMaisQue350++
    }
    continuar = prompt('Deseja continuar inserindo dados (S/N)? ')
} while (continuar == 'S')

console.log(`A média de salário da população é ${(totalSalario/contador).toFixed(2)}`)
console.log(`A média do número de filhos da população é ${(totalFilhos/contador).toFixed(2)}`)
console.log(`O maior salário é ${maiorSalario}`)
console.log(`O percentual de pessoas com salário acima de R$ 250,00 é ${(contadorMaisQue350 / contador * 100).toFixed(2)}%`)






