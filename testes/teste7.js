/*
7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final, mostre o preço a ser pago de acordo com os dados a seguir:

Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km

Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km
*/

const prompt = require('prompt-sync')()
let tipoCarro = parseInt(prompt('Digite o tipo de carro (1 - popular ou 2 - luxo): '))
let dias = parseInt(prompt('Digite quantos dias você utilizou o carro: '))
let kmPercorridos = parseInt(prompt('Digite quantos KMs percorridos: '))
let valorKM = 0
let valorDiaria = 0


if(tipoCarro === 1) {
    valorDiaria = dias * 90 
    if(kmPercorridos <= 100) {
        valorKM = kmPercorridos * 0.20
    } else {
        valorKM = kmPercorridos * 0.10
    }
} else if (tipoCarro === 2) {
    valorDiaria = dias * 150
    if(kmPercorridos  <= 200) {
        valorKM = kmPercorridos * 0.30
    } else {
        valorKM = kmPercorridos * 0.25
    }
}

console.log(`O valor total é R$ ${(valorDiaria + valorKM).toFixed(2)}`)






