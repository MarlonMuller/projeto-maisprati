/* 33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os elementos da diagonal principal com a média dos elementos da diagonal secundária. */

let matriz3x3 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

function main (matriz) {
    let somaDiagonalSecundaria = 0;
    for(let i = 0; i < matriz.length; i++){
        somaDiagonalSecundaria += matriz[i][matriz.length -1 - i]
    }
    let mediaDiagonalSecundaria = somaDiagonalSecundaria / matriz.length

    for(let i = 0; i < matriz.length; i++){
        matriz[i][i] *= mediaDiagonalSecundaria
    }
 
    console.log('Matriz resultante: ')
    for(let i = 0; i < matriz.length; i++){
        console.log(matriz[i])
    }
}

main(matriz3x3)