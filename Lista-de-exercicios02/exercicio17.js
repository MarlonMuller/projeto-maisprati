/*
17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas os dados das pessoas menores de idade
*/

const prompt = require('prompt-sync')()
const arrayNomes = []
const arrayIdades = []
const menoresDeIdade = []

for(let i = 0 ; i < 9 ; i++){
    let nome = prompt('Digite o nome: ')
    let idade = parseInt(prompt('Digite a idade: '))
    arrayNomes.push(nome)
    arrayIdades.push(idade)

    if(idade < 18){
        menoresDeIdade.push(`Nome: ${nome}, idade: ${idade}`)
    }
}
console.log(`Menores de idade...`)
console.log(menoresDeIdade)