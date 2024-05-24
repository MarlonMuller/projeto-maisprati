/*
6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado
*/

while(true) {
const prompt = require('prompt-sync')()
let usuario = parseInt(prompt('Digite o valor soteado (entre 1 e 5): '))
let maquina = Math.floor(Math.random()*5)+1

if(usuario > 5 || usuario <= 0) {
    console.log('Opção inválida, digite valores entre 1 e 5.')
} else if(usuario === maquina) {
    console.log('Parabéns! Você acertou!')
} else {
    console.log('Não foi dessa vez. Tente novamente.')
}
let continuar = prompt('Deseja continuar? n/s: ')
if(continuar.toLowerCase() !== 's') {
    console.log('Obrigado por participar')
    break
}

}










