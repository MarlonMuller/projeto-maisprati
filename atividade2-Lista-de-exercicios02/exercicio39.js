/*
39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.
*/
const prompt = require('prompt-sync')()

function gerarVetorA() {
    const vetorA = []
    for (let i = 0; i < 100; i++) {
        let valor = parseInt(prompt('Digite um valor: '))
        vetorA.push(valor)
    }
    return vetorA
}

function compactarVetorParaB (vetorA) {
    const vetorB = []
    for(let i = 0; i < vetorA.length; i++){
        if(vetorA[i] > 0) {
            vetorB.push(vetorA[i])
        }
    }
    return vetorB
}

let vetorA = gerarVetorA()
console.log('Vetor A (original): ')
console.log(vetorA)

let vetorB = compactarVetorParaB(vetorA)
console.log('Vetor B (sem nulos e negativos): ')
console.log(vetorB)