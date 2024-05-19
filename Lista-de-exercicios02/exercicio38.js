/*
38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
variável identificadora que calcule a operação conforme a informação contida nesta
variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor.
*/

const prompt = require('prompt-sync')();
const vetor = [];
let operacao;
let soma = 0;
let produto = 1;

function main() {
    for (let i = 0; i < 6; i++) {
        let valor = parseInt(prompt('Digite um valor: '))
        vetor.push(valor)
        soma += valor
        produto *= valor
    }
    console.log('Qual operação desejada para os valores informados anteriormente?')
    console.log('(1 - soma, 2 - produto, 3 média, 4 ordenação em ordem crescente, 5 - mostrar vetor)')
    operacao = parseInt(prompt('Digite: '))

    if(operacao == 1) {
        console.log(soma)
    }
    else if(operacao == 2) {
        console.log(produto)
    }
    else if(operacao == 3) {
        console.log(soma/vetor.length)
    }
    else if(operacao == 4) {
        console.log(vetor.slice().sort((a,b) => a -b))
    }
    else if(operacao == 5) {
        console.log(vetor)
    }

}

main()














