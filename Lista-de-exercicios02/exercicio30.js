/* 
30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
e os vetores criados. 
*/

function somaLinhaColunas (matriz) {
    let SL = [];
    let SC = [];
    
    let somaColuna = 0;
    
    for(let i = 0; i < matriz.length; i++){
        let somaLinha = 0;
        for(let j = 0; j < matriz[i].length; j++){
            somaLinha += matriz[i][j]
            if(SC[j] == undefined){
                SC[j] = 0;
            }
            SC[j] += matriz[i][j]
        }
        SL.push(somaLinha)
    }
    return { SL, SC }
}

const matriz5x5 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];

const resultado = somaLinhaColunas(matriz5x5)
console.log(`Matriz:`)
console.log(matriz5x5)
console.log(`A soma de cada linha é: ${resultado.SL}`)
console.log(`A soma de cada coluna é: ${resultado.SC}`)