/*
44. Escreva uma função que conte quantas propriedades do tipo string existem em um objeto 
e retorne esse número.
*/

const obj1 = {
    id: 90017321, 
    nome: 'Marlon', 
    funcao: 'Analista', 
    filmes: ['O homem do norte', 'Napoleão', 'A mulher rei'], 
    melhoresTimesDoSul: ['Internacional', 'Juventude', 'Novo Hamburgo'],
    amigos: ["Maria", "Pedro", "Ana"]
}

function contarString (obj) {
    let counter = 0
    for(const propriedade in obj) {
        if(typeof(obj[propriedade]) === 'string') {
            counter++
        }
    }
    return counter
}

const qtdString = contarString(obj1)
console.log(qtdString)