//5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

/*
1 papel
2 tesoura
3 pedra
*/

const prompt = require('prompt-sync')();

let numberUser = prompt('Digite 1 para papel, 2 para tesoura ou 3 para pedra: ')
let numberMachine = parseInt(Math.random() * (4 - 1) + 1);

if (numberUser == 1 && numberMachine == 2) {
    console.log(`Você perdeu! Usuário: Papel - Máquina: Tesoura`)
} else if (numberUser == 1 && numberMachine == 3) {
    console.log('Você ganhou! Usuário: Papel - Máquina: Pedra')
} else if (numberUser == 2 && numberMachine == 1) {
    console.log(`Você ganhou! Usuário: Tesoura - Máquina: Papel`)
} else if (numberUser == 2 && numberMachine == 3) {
    console.log('Você perdeu! Usuário: Tesoura - Máquina: Pedra')
} else if (numberUser == 3 && numberMachine == 1) {
    console.log('Você perdeu! Usuário: Pedra - Máquina: Papel')
} else if (numberUser == 3 && numberMachine == 2) {
    console.log('Você ganhou! Usuário: Pedra - Máquina: Tesoura')
} else {
    console.log('Empate!')
}
