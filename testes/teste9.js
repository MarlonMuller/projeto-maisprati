/*
9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final, mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um funcionário.
*/

const prompt = require('prompt-sync')()
let salarioFeminino = 0
let salarioMasculino = 0

while(true) {

    let salario = parseInt(prompt('Digite o seu salário: '))
    let sexo = prompt('Digite o seu sexo (f/m): ')

    if(sexo.toLowerCase() == 'f') {
        salarioFeminino += salario
    } else if (sexo.toLowerCase() == 'm') {
        salarioMasculino += salario
    }

    let continuar = prompt('Deseja continuar? (s/n): ')
    if(continuar.toLowerCase() !== 's') {
        console.log(`Obrigado por participar.\nO salário total de mulheres é R$${salarioFeminino.toFixed(2)}\nO salário total de homens é R$ ${salarioMasculino.toFixed(2)}`)
        break
    }
}








