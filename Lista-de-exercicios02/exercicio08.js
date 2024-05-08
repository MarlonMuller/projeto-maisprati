/*
8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O sistema funciona assim:
- até 10h de atividade no mês: ganha 2 pontos por hora
- de 10h até 20h de atividade no mês: ganha 5 pontos por hora
- acima de 20h de atividade no mês: ganha 10 pontos por hora

- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)

Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.
*/

const prompt = require('prompt-sync')();
let horasAtividade = parseInt(prompt('Digite quantas horas de atividade você fez no mês: '))
let pontos = 0;
let valorFaturado = 0;

if(horasAtividade < 10){
    pontos = horasAtividade * 2;
} else if(horasAtividade < 20){
    pontos = horasAtividade * 5;
} else{
    pontos = horasAtividade * 10
} 

valorFaturado = pontos * 0.05
console.log(`Você fez ${pontos} pontos e faturou R$${valorFaturado.toFixed(2)}`);


