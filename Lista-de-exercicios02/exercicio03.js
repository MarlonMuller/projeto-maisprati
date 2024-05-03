/*
3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e R$ 0.45 para viagens mais longas.
*/

const prompt = require('prompt-sync')();
let distancia = parseInt(prompt('Qual a distância que você deseja percorrer(em Km)? '))
let preco;

if(distancia <= 200){
    preco = distancia * 0.5
} else {
    preco = distancia * 0.45
}

console.log(`O preço da sua passagem é R$ ${preco.toFixed(2)}`)