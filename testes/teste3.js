/*
3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e R$ 0.45 para viagens mais longas.
*/

const prompt = require('prompt-sync')()

let distancia = parseInt(prompt('Digite a distância que você deseja percorrer: '))

let preco

if(distancia <= 200) {
    preco = distancia * 0.50
} else {
    preco = distancia * 0.45    
}
console.log(`Sua passagem custará R$ ${preco.toFixed()},00`)