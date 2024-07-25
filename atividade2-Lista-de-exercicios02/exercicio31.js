/* 31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo todos os elementos de V diferentes de A. Mostre os resultados. */

const prompt = require('prompt-sync')()
let A = prompt('Digite um número inteiro para identificar quantas vezes aparece na matriz: ');

function main (matriz){
    let contador = 0;
    let matrizX = []

    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            if(A == matriz[i][j]){
                contador++
            } else {
                matrizX.push(matriz[i][j])
            } 
        }
    }
    return {contador, matrizX}
}

const matrizV = [
    [13, 26, 39, 8, 43, 34, 48, 36, 29, 21, 2, 50, 16, 19, 1, 12, 17, 5, 4, 38, 37, 15, 32, 45, 40, 14, 46, 20, 47, 25],
    [3, 20, 49, 41, 22, 7, 24, 31, 44, 11, 27, 13, 30, 10, 50, 37, 35, 16, 43, 28, 48, 23, 9, 25, 33, 18, 8, 12, 40, 42],
    [6, 2, 8, 3, 21, 4, 14, 39, 7, 1, 26, 44, 49, 30, 11, 17, 50, 18, 5, 9, 32, 38, 29, 36, 23, 47, 28, 46, 41, 35],
    [40, 17, 8, 27, 10, 16, 22, 11, 43, 47, 33, 31, 2, 34, 9, 20, 12, 29, 15, 38, 42, 21, 3, 24, 46, 36, 18, 49, 13, 48],
    [23, 14, 26, 32, 39, 37, 6, 4, 31, 28, 41, 35, 45, 5, 34, 19, 25, 40, 27, 48, 9, 24, 7, 17, 30, 50, 20, 3, 16, 8],
    [49, 33, 37, 44, 5, 10, 28, 13, 30, 22, 2, 15, 6, 9, 12, 47, 21, 24, 27, 40, 29, 43, 38, 14, 41, 11, 25, 50, 35, 8],
    [24, 42, 7, 4, 35, 16, 48, 17, 26, 9, 3, 38, 32, 46, 18, 20, 45, 13, 36, 1, 14, 11, 49, 44, 15, 22, 29, 50, 6, 47],
    [5, 21, 31, 43, 15, 19, 40, 50, 12, 41, 14, 46, 6, 29, 35, 18, 38, 33, 37, 2, 13, 32, 23, 27, 10, 44, 48, 7, 20, 3],
    [30, 45, 38, 11, 28, 17, 8, 19, 22, 13, 21, 48, 39, 33, 26, 50, 5, 36, 25, 42, 34, 3, 27, 46, 41, 20, 14, 15, 23, 9],
    [42, 44, 11, 39, 30, 18, 22, 4, 8, 37, 50, 20, 25, 46, 3, 33, 32, 9, 31, 15, 40, 14, 5, 24, 29, 17, 21, 12, 1, 38],
    [50, 29, 12, 14, 24, 41, 15, 7, 28, 36, 21, 47, 11, 19, 32, 38, 8, 31, 22, 42, 4, 23, 16, 40, 45, 2, 6, 30, 3, 33],
    [31, 36, 5, 27, 20, 46, 13, 47, 34, 19, 17, 8, 25, 45, 10, 22, 1, 50, 11, 41, 16, 33, 26, 42, 30, 28, 14, 24, 37, 29],
    [28, 7, 33, 1, 10, 47, 41, 15, 13, 9, 48, 24, 50, 23, 45, 4, 2, 44, 18, 36, 8, 25, 32, 17, 20, 22, 35, 27, 31, 37],
    [9, 11, 3, 23, 37, 25, 22, 21, 4, 30, 40, 34, 47, 1, 20, 31, 46, 26, 28, 44, 19, 18, 39, 49, 50, 12, 5, 32, 42, 6],
    [2, 39, 30, 20, 14, 50, 27, 25, 11, 33, 16, 42, 17, 21, 28, 6, 13, 10, 37, 35, 19, 44, 49, 32, 1, 8, 26, 3, 7, 24],
    [27, 12, 19, 18, 29, 43, 48, 15, 7, 1, 38, 34, 24, 9, 40, 31, 23, 14, 46, 26, 5, 11, 50, 45, 36, 2, 41, 3, 30, 20],
    [19, 6, 25, 46, 44, 9, 17, 48, 39, 4, 35, 40, 30, 12, 47, 43, 5, 8, 23, 11, 31, 1, 21, 36, 38, 49, 3, 27, 50, 10],
    [35, 32, 41, 13, 9, 20, 2, 23, 33, 46, 37, 18, 40, 4, 12, 8, 47, 3, 31, 45, 25, 19, 7, 29, 44, 5, 28, 50, 27, 21],
    [17, 45, 4, 42, 6, 16, 30, 5, 18, 34, 8, 13, 24, 27, 9, 25, 50, 22, 40, 28, 14, 43, 32, 12, 48, 2, 11, 15, 7, 1],
    [8, 19, 36, 50, 45, 3, 12, 16, 11, 40, 25, 14, 30, 35, 18, 28, 47, 26, 1, 4, 41, 22, 6, 17, 38, 49, 23, 20, 32, 13],
    [16, 8, 10, 2, 20, 41, 49, 34, 33, 4, 46, 50, 37, 31, 9, 15, 44, 38, 45, 27, 1, 24, 5, 17, 32, 13, 21, 7, 29, 42],
    [7, 11, 17, 44, 36, 13, 18, 9, 23, 27, 28, 6, 22, 33, 39, 30, 31, 21, 47, 42, 14, 4, 20, 24, 5, 25, 41, 12, 15, 40],
    [22, 38, 29, 15, 50, 48, 2, 40, 30, 19, 34, 12, 37, 20, 45, 8, 32, 1, 7, 4, 23, 6, 17, 14, 26, 9, 11, 44, 35, 28],
    [21, 14, 31, 50, 19, 27, 10, 37, 24, 44, 18, 28, 8, 6, 40, 23, 46, 11, 32, 7, 20, 1, 41, 22, 3, 49, 17, 16, 35, 2],
    [37, 3, 42, 8, 32, 25, 1, 18, 23, 13, 21, 36, 30, 50, 45, 41, 14, 11, 31, 6, 7, 46, 20, 15, 48, 35, 9, 44, 39, 17],
    [15, 30, 7, 23, 48, 29, 42, 11, 20, 4, 16, 47, 43, 2, 14, 12, 40, 37, 3, 8, 19, 36, 13, 18, 34, 25, 50, 5, 6, 9],
    [43, 5, 22, 33, 39, 18, 6, 38, 28, 24, 49, 21, 27, 45, 26, 7, 3, 31, 1, 15, 14, 48, 4, 11, 16, 8, 2, 12, 9, 47],
    [46, 24, 45, 35, 5, 1, 13, 2, 26, 17, 32, 40, 10, 48, 4, 37, 23, 28, 3, 8, 6, 33, 41, 11, 18, 50, 27, 21, 20, 44],
    [18, 4, 43, 2, 16, 9, 31, 15, 21, 49, 12, 1, 39, 47, 7, 24, 34, 25, 8, 50, 10, 5, 46, 30, 35, 22, 3, 29, 19, 6],
    [12, 26, 34, 25, 6, 19, 47, 48, 28, 9, 41, 16, 3, 8, 37, 29, 18, 31, 2, 13, 40, 30, 1, 45, 14, 27, 32, 44, 11, 20]
]

const resultado = main(matrizV)

console.log(`O valor ${A} aparece na matriz ${resultado.contador} vezes.`)
console.log('MatrizX: ', resultado.matrizX)