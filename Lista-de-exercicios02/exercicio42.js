/*
42. Crie um objeto chamado dados que contém várias propriedades, incluindo números, strings e arrays. 
Escreva uma função que retorne um novo objeto apenas com as propriedades que são arrays.
*/

const dados = {
    nome: 'Fulano', 
    idade: 74, 
    proficao: 'Advogado', 
    filmesFavoritos: ['O homem do norte', 'Napoleão', 'A mulher rei'], 
    melhoresTimesDoSul: ['Internacional', 'Juventude', 'Novo Hamburgo'],
    amigos: ["Maria", "Pedro", "Ana"]
}

function filtrarArrays (obj) {
    const resultado = {}
    for(const propriedade in obj) {
        if(Array.isArray(obj[propriedade])) {
            resultado[propriedade] = obj[propriedade]
        }
    }
    return resultado
}

const somenteArray = filtrarArrays(dados)

console.log(somenteArray)