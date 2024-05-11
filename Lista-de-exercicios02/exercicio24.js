/*
24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a quantidade de elementos negativos da linha correspondente de M
*/

const M = [
    [1, -2, 3, 4, -5, 6, -7, 8],
    [9, -10, 11, -12, 13, -14, 15, 16],
    [-1, 2, -3, 4, 5, -6, 7, -8],
    [9, 10, -11, 12, -13, 14, 15, -16],
    [-1, -2, -3, -4, -5, -6, -7, -8],
    [1, 2, 3, 4, 5, 6, 7, 8]
]

let C = []

for(let i = 0 ; i < M.length ; i++){
    let count = 0;

    for(let j = 0 ; j < M[i].length ; j++){
        if(M[i][j] < 0){
            count++
        }
    }
    C.push(count)
}

console.log(C)


