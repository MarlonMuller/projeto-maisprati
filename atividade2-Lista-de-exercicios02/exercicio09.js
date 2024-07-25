/*
9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final, mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um funcionário.
*/

const prompt = require('prompt-sync')()
let salarioHomens = 0;
let salarioMulheres = 0;

do {
    let sexo = prompt('Digite seu sexo (M/F): ')
    let salario = parseFloat(prompt('Digite seu salário: '))

    if(sexo == 'M'){
        salarioHomens += salario
    } else if (sexo == 'F'){
        salarioMulheres += salario
    } else {
        console.log('Sexo inválido, escolha M ou F')
    }

    let continuar;

    continuar = prompt('Deseja continuar (S/N)? ').toUpperCase();

    if(continuar == 'N'){
        break;
    } else if(continuar != 'S' && continuar != 'N'){
        console.log('Opção inválida, escolha S ou N')
    }
} while (true);

console.log(`O total de salário das mulheres é R$ ${salarioMulheres.toFixed(2)}`)
console.log(`O total de salário dos homens é R$ ${salarioHomens.toFixed(2)}`)