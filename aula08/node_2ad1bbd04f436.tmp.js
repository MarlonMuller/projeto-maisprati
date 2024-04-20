//Exercitando Arrays e funções

//Exercicio 1: Somar todos os elementos de um array
/*
let elementos = [1, 2, 3, 4]

function somaElementos(vetor) {
    let soma = 0
    for(let i = 0; i < vetor.length ; i++) {
        soma += vetor[i]
    }
    return soma
}

console.log(`A soma dos elementos é: ${somaElementos(elementos)}`)
*/

//Exercicio 2: Encontrar o maior número em um Array
/*
let elementos = [1, 2, 10, 4, 88, 9, 11]

function maiorNumero(array) {
    let maior = array[0];
    for(let i = 0; i < array.length; i++) {
        if(array[i] > maior) {
            maior = array[i]
        }
    }
    return maior;
}

console.log(`O maior número do array é ${maiorNumero(elementos)}`)
*/

//Exercício 3: Reverter um array

let elementos = [1, 2, 3, 4, 5]

function reverterArray(vetor) {
    let vetorResultado = []
    for (let i = vetor.length -1; i >= i; i--){
        vetorResultado.push(vetor[i])
    }
    return vetorResultado
}

console.log('O vetor invertido é : ', reverterArray([1, 2, 3, 4]))