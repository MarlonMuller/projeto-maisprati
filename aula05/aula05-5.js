// Calculadora utilizando switch case

const prompt = require('prompt-sync')();

let num1 = parseInt(prompt('Digite o primeiro número: '))
let num2 = parseInt(prompt('Digite o segundo número: '))
let result;
let operacao = prompt('Digite a operação desejada (+, -, * ou /) ')

switch (operacao) {
    case '+':
        result = num1 + num2
        break;
    case '-':
        result = num1 - num2
        break;
    case '*':
        result = num1 * num2
        break;
    case '/':
        result = num1 / num2
        break;
    default:
        result = 'operação inválida, escolha (+, -, * ou /)'
        break;
}

console.log(`O resultado da operação é ${result}`)