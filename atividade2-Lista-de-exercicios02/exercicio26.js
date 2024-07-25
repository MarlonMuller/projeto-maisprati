/* 26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
P[1..3,1..5].*/

let A = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
];

let B = [
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30]
];

function calcularMatrizProduto(A, B) {
    let linhas = A.length;
    let colunas = A[0].length;

    let P = new Array(linhas);
    for (let i = 0; i < linhas; i++) {
        P[i] = new Array(colunas).fill(0);
    }

    for (let i = 0; i < linhas; i++) {
        for (let j = 0; j < colunas; j++) {
                P[i][j] += A[i][j] * B[i][j]; // Multiplicação correta das matrizes
        }
    }

    return P;
}

let matrizProduto = calcularMatrizProduto(A, B);

console.log(matrizProduto);













