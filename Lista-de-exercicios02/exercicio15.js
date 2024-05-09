/*
15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No final, mostre quais são os números pares que foram digitados e em que posições eles estão armazenados.
*/

const prompt = require('prompt-sync')()

let myArray = []
let myArrayPar = []

for(let i = 0; i < 10 ; i++){
    let numero = parseInt(prompt('Digite um valor: '))
    myArray.push(numero)
    if(numero % 2 == 0){
        myArrayPar.push({valor: numero, posicao: i})
    }
}

console.log(`Valores digitados: ${myArray}`)
console.log(`Valores pares digitados: ${myArrayPar.map(par => par.valor)}`)
console.log(`Valores pares digitados e suas posições...`)
myArrayPar.forEach(par => console.log(`Posição: ${par.posicao} - valor: ${par.valor}`))
