/*Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
média calculada seja menor que 6,0*/

//Falta o prompt

let nota1 = 3
let nota2 = 7

let media = (nota1 + nota2) / 2;

console.log(`Sua nota média foi ${media}`)

if(media >= 6) {
    console.log('PARABÉNS! Você foi aprovado')
} else {
    console.log('Você foi REPROVADO! Estude mais')
}