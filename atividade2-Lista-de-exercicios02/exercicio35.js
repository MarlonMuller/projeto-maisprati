/* 
35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada vetor pode ser preenchido quantas vezes forem necessárias.
*/

let valores = [2, 5, 8, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87];

function separarParesImpares (numeros) {
    let arrayPar = []
    let arrayImpar = []
    for(let i = 0; i < numeros.length; i++) {
        if(numeros[i] % 2 == 0) {
            arrayPar.push(numeros[i])
            if(arrayPar.length === 5) {
                console.log(`Array Par: ${arrayPar}`)
                arrayPar = []
            }
        } else {
            arrayImpar.push(numeros[i])
            if(arrayImpar.length === 5){
                console.log(`Array Impar: ${arrayImpar}`)
                arrayImpar = []
            }
        }
    }
    if(arrayPar.length > 0) {
        console.log(`Array Par: ${arrayPar}`)
    }
    if(arrayImpar.length > 0) {
        console.log(`Array Impar: ${arrayImpar}`)
    }
}

separarParesImpares(valores)





