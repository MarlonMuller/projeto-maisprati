//5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

const prompt = require('prompt-sync')();

let numberUser = prompt('Digite 1 para papel, 2 para tesoura ou 3 para pedra: ')

let numberMachine = parseInt(Math.random() * (4 - 1) + 1);

console.log(numberMachine)



/*
1 papel
2 tesoura
3 pedra
*/

if (numberUser == 1 && numberMachine == 2) {
    console.log(`Você perdeu! Usuário: Papel - Máquina: Tesoura`)
}
