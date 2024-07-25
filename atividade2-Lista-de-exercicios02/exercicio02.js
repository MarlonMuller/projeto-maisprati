/*
2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km/h, exiba uma mensagem dizendo que o usuário foi multado. 
Nesse caso, exiba o valor da multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.
*/

const prompt = require('prompt-sync')();
let velocidadeDoCarro = parseInt(prompt('Qual a velocidade do carro(em Km/h)?'));

if(velocidadeDoCarro > 80) {
    console.log(`Você foi multado em R$ ${(velocidadeDoCarro - 80) * 5},00 por estar trafegando a uma velocidade de ${velocidadeDoCarro}Km/h.`)
}