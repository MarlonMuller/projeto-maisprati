/*
23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da diagonal principal são iguais a 1 e os demais são nulos
*/

// Função para criar a matriz identidade

function criarMatriz (n){
    let matriz = []
    for(let i = 0 ; i < n ; i++){
        let linha = []
        for(let j = 0 ; j < n ; j++){
            if (j == i){
                linha.push(1)
            } else {
                linha.push(0)
            }
        }
        matriz.push(linha)
    }
    return matriz
}

const tamanho = 7
const matrizIdentidade = criarMatriz(tamanho)

function imprimirLista(matriz){
    for(i = 0 ; i < matriz.length ; i++){
        console.log(matriz[i].join(" "))
    }    

}

imprimirLista(matrizIdentidade)