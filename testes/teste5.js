/* 5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura). */

const prompt = require('prompt-sync')()

let usuario = parseInt(prompt('Digite o número da sua escolha: (1 - pedra, 2 - papel ou 3 - tesoura) '))

let maquina = Math.floor(Math.random() * (3 - 1)) + 1
let pontoUsuario = 0
let pontoMaquina = 0

if(usuario === 1 && maquina === 3 || usuario === 2 && maquina === 1 || usuario === 3 && maquina === 2) {
    pontoUsuario++
    console.log(`Você ganhou esta rodada! \n\nPlacar atual: \nUsuário: ${pontoUsuario} \nMáquina: ${pontoMaquina}`)
} else if (maquina === 1 && usuario === 3 || maquina === 2 && usuario === 1 || maquina === 3 && usuario === 2) {
    pontoMaquina++
    console.log(`Você perdeu esta rodada! \n\nPlacar atual: \nUsuário: ${pontoUsuario} \nMáquina: ${pontoMaquina}`)
} else {
    console.log(`Empatou! \n\nPlacar atual: \nUsuário: ${pontoUsuario} \nMáquina: ${pontoMaquina}`)
}











