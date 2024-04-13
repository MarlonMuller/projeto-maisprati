//COMENTÁRIOS NO JAVASCRIPT (ctrl + ;)

//o método 'log' do objeto 'console', utilizado para imprimir informações no console do navegador o u servidor.

/*
teste
teste
teste
*/


// STRING "" '' e `` 

console.log("Hello 'World'")
console.log('Hello "World"')
console.log(`Hello World`)
console.log(1000, 1520.10, "Marlon");

// Apresente no console a seguinte mensagem:
// Meu nome é Marlon e estou na aula 4 do professor Jaques

let nome = "Marlon"
console.log('Meu nome é ' + nome + ' e estou na aula 4 do professor Jaques')


// TIPOS DE VARIÁVEIS

nome1 = "Marlon"; //Não recomendado
var nome2 = "Marlon"; //Antiga e inadequada

let nome3 = "Marlon"; //Declaração padrão
const nome4 = "Marlon"; //Constante


//TIPOS DE DADOS:

// UNDEFINED
let teste;
console.log(teste)

// NULL
let meuNull = null;
console.log(meuNull)

// NUMBER
let meuNumber = 10.1;
console.log(typeof(meuNumber))

// STRING
let minhaString = "Sou desenvolvedor";
console.log(typeof(minhaString))



// OPERADORES ARITMÉTICOS


let num1 = 3;
let num2 = 2;

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 / num2)
console.log(num1 * num2)
console.log(num1 ** num2)

let numTeste = "5"

//Concatenar como string
console.log(numTeste + num1)

//Diminuir como número
console.log(numTeste - num1)

// Soma porque passou o numTest para Number inteiro
let numTeste2 = parseInt(numTeste);
console.log(numTeste2 + num1)

// Soma porque passou o numTest para Number de ponto flutuante
let numTeste3 = parseFloat(numTeste);
console.log(numTeste2 + num1 + 2.2)


// OPERADORES DE INCREMENTO E DECREMENTO


//Incremento
let contador = 1
console.log(contador)

contador = contador +1
console.log(contador)

contador++
console.log(contador)

//Decremento
let contador1 = 1
console.log(contador1)

contador = contador1 -1
console.log(contador1)

contador1--
console.log(contador1)


//Pré-incremento
console.log("Pré incremento e pré decremento")
let contador3 = 1
console.log(contador3)
console.log(contador3++) //incrementou, mas não mostrou na tela
console.log(++contador3) //incrementou e mostrou na tela somado com o que havia sido incrementado anteriormente

//Pré-decremento
let contador4 = 1
console.log(contador4)
console.log(contador4--)
console.log(--contador4)


const passo = 5

let contador5 = 0
contador5 += passo
console.log(contador5)




// ()
// **
// * / %
// + -
// Lê-se da esquerda para direita

// OPERADORES RELACIONAIS
console.log(10 < 5)
console.log(10 <= 5)
console.log(10 > 5)
console.log(10 >= 5)
console.log(10 == "10") // valor
console.log(10 === "10") // valor e tipo

// ESTRUTURA DE CONTROLE
console.log("Estrutura de controle")
const nota = 70

if (nota >= 60) {
    console.log('Aprovado')
} else if (nota >=40) {
    console.log('Está de recuperação')
} else {
    console.log('Reprovado, precisa estudar mais')
}


/*
Estrutura de decisão semelhante ao if/else, mas com a sintaxe mais enxuta.

<condição> ? <verdadeiro> : <falso>;
*/

let resultadoTernario = (10 < 100) ? true : false
console.log(resultadoTernario);

// ENTRADA DE DADOS

const prompt = require('prompt-sync')();

let testePrompt = prompt("Digite aqui seu nome:");
console.log()