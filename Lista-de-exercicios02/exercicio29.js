/* 
29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz M.
Escrever essas somas e a matriz. 
*/

function calculos (matriz){
    let somaLinha4 = 0;
    let somaColuna2 = 0;
    let somaDiagonalPrincipal = 0;
    let somaTotal = 0;

    for (let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            if(i == 3 ){
                somaLinha4 += matriz[i][j]
            }
            if(j == 1){
                somaColuna2 += matriz[i][j]
            }
            if(i == j){
                somaDiagonalPrincipal += matriz[i][j]
            }
            somaTotal += matriz[i][j]
        }
    }
    return { somaLinha4, somaColuna2, somaDiagonalPrincipal, somaTotal };
}

const matriz5x5 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];

const resultado = calculos(matriz5x5)

console.log(`O resultado da soma da linha 4 é: ${resultado.somaLinha4}`)
console.log(`O resultado da soma da coluna 2 é: ${resultado.somaColuna2}`)
console.log(`O resultado da soma da diagonal principal é: ${resultado.somaDiagonalPrincipal}`)
console.log(`O resultado de todos os itens da matriz é: ${resultado.somaTotal}`)