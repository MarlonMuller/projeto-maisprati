/* 32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a matriz lida e a modificada. */

function encontrarMaiorModuloLinha (linha) {
    let maiorModulo = linha[0] >= 0 ? linha[0] : -linha[0]
    for(let i = 1; i < linha.length; i++){
        const elemento = linha[i]
        const modulo = elemento >= 0 ? elemento : -elemento
        if(modulo > maiorModulo){
            maiorModulo = modulo
        }
    }
    return maiorModulo
}

function dividirPorMaiorModuloLinha(linha, maiorModulo){
    for(let i = 0; i < linha.length; i++){
        linha[i] /= maiorModulo
    }
}

function processarMatriz (matriz){
    for(let i = 0; i < matriz.length; i++) {
    let linha = matriz[i]
    const maiorModulo = encontrarMaiorModuloLinha(linha)
    dividirPorMaiorModuloLinha(linha, maiorModulo)
        }
}

const M = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13],
    [1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13],
    [13, -12, 11, -10, 9, -8, 7, -6, 5, -4, 3, -2, 1],
    [-1, 2, -3, 4, -5, 6, -7, 8, -9, 10, -11, 12, -13],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -13],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [10, -10, 10, -10, 10, -10, 10, -10, 10, -10, 10, -10, 10],
];

function imprimirMatriz (matriz){
    for(let i = 0; i < matriz.length; i++){
        console.log(matriz[i].join(' '))
    }
}

console.log('Matriz original: ')
imprimirMatriz(M)

processarMatriz(M)

console.log('Matriz modificada: ')
imprimirMatriz(M)