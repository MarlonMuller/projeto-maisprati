/* 
28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no item:
a) a soma dos elementos acima da diagonal principal;
b) a soma dos elementos abaixo da diagonal principal 
*/

function somaAcimaAbaixoMatriz (matriz) {
    let somaAcima = 0;
    let somaAbaixo = 0;

    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            if(i < j){
                somaAcima += matriz[i][j]
            } else if (i > j){
                somaAbaixo += matriz[i][j]
            }
        }
    }
    return {
        somaAcima:somaAcima,
        somaAbaixo:somaAbaixo
    }
}

const matriz = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
    [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
];

const resultado = somaAcimaAbaixoMatriz(matriz)

console.log(`O resultado da soma acima da linha vertical é ${resultado.somaAcima}`)
console.log(`O resultado da soma abaixo da linha vertical é ${resultado.somaAbaixo}`)