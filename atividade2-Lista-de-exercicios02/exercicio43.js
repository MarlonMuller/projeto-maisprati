/*
43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto combinando as propriedades 
de ambos, onde as propriedades de obj2 têm precedência sobre as do obj1 em caso de conflitos.
*/

const obj1 = {id: 90017321, nome: 'Marlon', funcao: 'Analista'}
const obj2 = {id: 90017321, nome: 'Marlon Muller', notebook: 'HP', fone: 'Multilaser'}

function merge (obj1, obj2) {
    return {...obj1, ...obj2}
}

const obj3 = merge(obj1, obj2)

console.log(obj3)