// Declaração de função
/*
function calcularAreaTerreno(largura, comprimento) {
    let area = largura * comprimento
    return area
}

let prompt = require('prompt-sync')()

let lg = prompt('Digite a largura do terreno em metros: ');
let cp = prompt('Digite o comprimento do terreno em metros: ');

// Chamada da função e passagem de parâmetros
let resultado = calcularAreaTerreno(lg, cp)

console.log('O terreno possui ' + resultado + ' metros quadrados')
*/

// Função anônima
/*
let exibirFuncao = function() {
    console.log('Olá')
}

exibirFuncao()
*/

function exibirFuncao(callbackSucesso, callbackErro) {
    if(true) {
        callbackSucesso('Funções de callback em caso de sucesso')
    } else {
        callbackErro('Função de callback em caso de erro')
    }
}

let callbackSucesso = function(titulo, descricao) {
    console.log(titulo)
}

let callbackErro = function(erro){
    console.log(erro)
}

exibirFuncao(callbackSucesso, callbackErro)

