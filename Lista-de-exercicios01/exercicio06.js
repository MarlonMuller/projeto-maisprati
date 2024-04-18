/*6. Ler três valores para os lados de um triângulo: A, B e C. 
Verificar se os lados fornecidos formam realmente um triângulo. 
Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
*/

// falta o prompt

let ladoA = 8;
let ladoB = 8;
let ladoC = 5;

if(ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB){
    
    if(ladoA === ladoB && ladoB === ladoC) {
        console.log('Forma um triângulo equilátero ')
    } else if(ladoA !== ladoB && ladoB !== ladoC){
        console.log('Forma um triângulo escaleno')
    } else if( ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log('Forma um triângulo isósceles')
    }
} else {
    console.log('Não é possível formar um triângulo, tente outros valores')
}