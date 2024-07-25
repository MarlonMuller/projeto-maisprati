/*
6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado
*/

const prompt = require('prompt-sync')();

const numberUser = prompt('Digite o número que você acredita que será sorteado (entre 1 e 5): ')

let numberMachine = parseInt(Math.random() * (6 - 1) + 1)

if (numberUser == numberMachine) {
    console.log(`Parabéns, você acertou! Usuário: ${numberUser} - Máquina: ${numberMachine}`)
} else {
    console.log(`Não foi dessa vez, você não acertou. Usuário: ${numberUser} - Máquina: ${numberMachine}`)
}