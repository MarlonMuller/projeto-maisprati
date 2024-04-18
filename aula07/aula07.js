// Array ou Vetor

/*
let listaCompras = Array()

listaCompras[0] = "Shampoo"
listaCompras[1] = 'Condicionador'
listaCompras['x'] = 100 
console.log(listaCompras)

let listaFrutas = ['Banana', 'Morango']
console.log(listaFrutas)

let listaViagem = Array('Passagens', 'Malas')
console.log(listaViagem)
*/

// Arrays multidimensionais ou Matriz
/*
let lista_coisas = Array()

lista_coisas['Frutas'] = Array()

lista_coisas['Frutas'][0] = 'Morango'
lista_coisas['Frutas'][1] = 'Uva'
lista_coisas['Frutas'][2] = 'Laraja'
lista_coisas['Frutas'][3] = 'Bergamota'

lista_coisas['Viagem'] = Array()
lista_coisas['Viagem'][0] = 'Passagens'
lista_coisas['Viagem'][1] = 'Malas'

console.log(lista_coisas)

//Inserção de elementos no final do array
lista_coisas['Frutas'].push('Banana')
console.log(lista_coisas)

//Inserção de elementos no começo do array
lista_coisas['Frutas'].unshift('Limão')
console.log(lista_coisas)

//Exclusão de elementos no final do array
lista_coisas['Frutas'].pop()
console.log(lista_coisas)

//Exclusão de elementos no começo do array
lista_coisas['Frutas'].shift()
console.log(lista_coisas)
*/

// Procurar índice do elemento no array
/*
let listaProdutos = Array('Computador', 'Caneta', 'Chuteira')
let aux = listaProdutos.indexOf('Computador')

if(aux === -1){
    console.log('Elemento não existe no array')
} else {
    console.log('Elemento existe e está na posição ' + aux)
}
*/

// Ordenar array

let listaProdutos = Array('Lousa', 'Caneta', 'Chuteira', 'Garrafa de água')
console.log(listaProdutos.sort())
let listaNumeros = Array(5, 4, 1, 0, 2, 3, 10, 15)
console.log(listaNumeros.sort())



