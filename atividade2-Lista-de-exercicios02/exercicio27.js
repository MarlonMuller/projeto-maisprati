/*27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
um vetor V(36). Escrever o vetor V no final.*/

const prompt = require('prompt-sync')()

// Função principal
function main() {
    let matriz = [];
    let vetorResultado = [];
    
    // Lendo a matriz
    for (let i = 0; i < 6; i++) {
        matriz[i] = [];
        for (let j = 0; j < 6; j++) {
            matriz[i][j] = parseInt(prompt("Digite o valor para M[" + i + "][" + j + "]"));
        }
    }
    
    // Lendo o valor de A
    let valorA = parseInt(prompt("Digite o valor de A:"));
    
    // Multiplicando a matriz pelo valor A e armazenando os resultados no vetor
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            vetorResultado.push(matriz[i][j] * valorA);
        }
    }
    
    // Exibir o vetor resultado
    console.log("Vetor Resultado:");
    console.log(vetorResultado.join(", "));
}

// Chamar a função principal para executar o algoritmo
main();