/*
16. Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
Obs.: Número primo é aquele divisível somente por 1 e ele mesmo

Utilizar somente while do exercício 14 ao 16

*/

let contador = 0; 
let numeroAtual = 101;

while (contador < 50) {
    let ePrimo = true;

    let divisor = 2;
    while (divisor <= numeroAtual / 2 && ePrimo) {
        if (numeroAtual % divisor === 0) {
            ePrimo = false;
        }
        divisor++;
    }

    // Se for primo, imprima-o
    if (ePrimo) {
        console.log(numeroAtual);
        contador++;
    }

    // Incrementando para verificar o próximo número ímpar
    numeroAtual += 2;
}
