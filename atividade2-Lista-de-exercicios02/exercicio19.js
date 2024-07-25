/*
19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de repetição. Escrever cada um deles no formato HH.MM.SS.
*/

const prompt = require('prompt-sync')()

function validarHorario(horario) {
    // Verifica se o horário tem o formato HH.MM.SS
    const regex = /^([01]\d|2[0-3])\.[0-5]\d\.[0-5]\d$/;
    return regex.test(horario);
}

function lerHorarios () {
    const horarios = []
    let contador = 0
    while(contador < 5) {
        const horario = prompt(`Digite o ${contador + 1}º horário no formato HH.MM.SS:`)
        if (validarHorario(horario)) {
            horarios.push(horario)
            contador++
        } else {
            console.log("Formato inválido! Por favor, insira o horário no formato HH.MM.SS.")
        }
    }
    return horarios
}

function exibirHorarios(horarios) {
    console.log("Horários válidos:");
    horarios.forEach(horario => {
        console.log(horario);
    });
}

// Função principal para execução
function main() {
    const horarios = lerHorarios();
    exibirHorarios(horarios);
}

// Executa o programa
main();
