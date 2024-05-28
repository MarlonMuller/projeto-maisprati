/*
14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final, mostre uma listagem com todos os nomes informados, na ordem inversa daquela em que eles foram informados.
*/

const prompt = require('prompt-sync')()


function gerarVetor() {

    let vetorDeNomes = []

    for (let i = 1; i <= 7; i++) {
        let nome = prompt(`Digite o ${i}° nome: `)
        vetorDeNomes.push(nome)
    }

    return vetorDeNomes.reverse()

}

console.log(gerarVetor())


