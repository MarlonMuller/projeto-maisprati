/*
17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas os dados das pessoas menores de idade.
*/
const prompt = require('prompt-sync')()
const nomes = []
const idades = []

function lerNomesIdades() {

    for (let i = 0; i < 9; i++) {
        let nome = prompt(`Digite o nome da ${i + 1}° pessoa: `)
        let idade = prompt(`Digite a idade da ${i + 1}° pessoa: `)

        nomes.push(nome)
        idades.push(idade)
    }
}

function listarMenoresDeIdade() {
    console.log('Menores de idade:')
    for (let i = 0; i < idades.length; i++) {
        if (idades[i] < 18) {
            console.log(`Nome: ${nomes[i]} - Idade: ${idades[i]}`)
        }
    }
}

lerNomesIdades()
listarMenoresDeIdade()



