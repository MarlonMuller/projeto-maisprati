/*
7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. 
Além disso, o cliente paga por Km percorrido. 
Faça um programa que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final, mostre o preço a ser pago de acordo com os dados a seguir:

Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km

Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km
*/

const prompt = require('prompt-sync')();
let tipoCarro = prompt('Qual o tipo de carro alugado? (digite 1 para popular ou 2 para luxo): ');
let diasAluguel = prompt('Digite quantos dias de aluguel: ');
let kmsRodados = prompt('Digite quantos kms rodados: ');
let diariaPopular = 90;
let diariaLuxo = 150;
let totalDiaria = 0;
let totalKms = 0;
let totalFinal = 0;

if(tipoCarro == 1){
    totalDiaria = diariaPopular * diasAluguel;
    if(kmsRodados <= 100){
        totalKms = kmsRodados * 0.20
    } else {
        totalKms = kmsRodados * 0.10
    }
    totalFinal = totalDiaria + totalKms
    console.log(`Valor a ser pago: R$${totalFinal}`)
    
} else if(tipoCarro == 2){
    totalDiaria = diariaLuxo * diasAluguel;
    if(kmsRodados <= 200){
        totalKms = kmsRodados * 0.30
    } else {
        totalKms = kmsRodados * 0.25
    }
    totalFinal = totalDiaria + totalKms
    console.log(`Valor a ser pago: R$${totalFinal}`)
}

