/*
16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.
*/

const myArray = []
let myArraySorted = []

for(i = 0 ; i < 20 ; i++){
    let numeroAleatorio = Math.floor(Math.random() * 100)
    myArray.push(numeroAleatorio)
}

myArraySorted = [...myArray].sort((a, b) => a - b)


console.log(`Números gerados: ${myArray}`)

console.log(`Números gerados em ordem crescente: ${myArraySorted}`)