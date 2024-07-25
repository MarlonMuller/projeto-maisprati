/*
12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21
*/

let fib = [1, 1]

for(let i = 2; i < 10; i++){
    fib[i] = fib[i-1] + fib[i-2];
}
console.log(fib.join(', '));