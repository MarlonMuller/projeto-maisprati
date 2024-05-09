/*
13. Crie um programa que preencha automaticamente (usando lógica, não apenas atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos da sequência de Fibonacci.
1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610
*/

let vetor = []
let a = 1
let b = 1

for(let i = 0 ; i <15 ; i++){
    vetor.push(a)
    let temp = a
    a = b
    b = temp + b
}

console.log(vetor)
