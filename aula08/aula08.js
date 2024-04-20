//Exercitando Arrays e funções

//Exercicio 1: Somar todos os elementos de um array
/*
let elementos = [1, 2, 3, 4]

function somaElementos(vetor) {
    let soma = 0
    for(let i = 0; i < vetor.length ; i++) {
        soma += vetor[i]
    }
    return soma
}

console.log(`A soma dos elementos é: ${somaElementos(elementos)}`)
*/

//Exercicio 2: Encontrar o maior número em um Array
/*
let elementos = [1, 2, 10, 4, 88, 9, 11]

function maiorNumero(array) {
    let maior = array[0];
    for(let i = 0; i < array.length; i++) {
        if(array[i] > maior) {
            maior = array[i]
        }
    }
    return maior;
}

console.log(`O maior número do array é ${maiorNumero(elementos)}`)
*/

//Exercício 3: Reverter um array
/*
let elementos = [1, 2, 3, 4, 5]

function reverterArray(vetor) {
    let vetorResultado = []
    for (let i = vetor.length -1; i >= 0; i--){
        vetorResultado.push(vetor[i])
    }
    return vetorResultado
}

console.log('O vetor invertido é : ', reverterArray([1, 2, 3, 4]))
*/

// Exercício 4: Somar todos os elementos de uma matriz

/*
function somaMatriz(matriz){
    let soma = 0
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            soma += matriz[i][j]
        }
    }
    return soma
}

console.log('A soma dos elementos contidos na nossa matriz é: ', somaMatriz([[1, 2], [3, 4]]))
*/

// Exercício 5: Encontrar o maior número em uma matriz
/*
let myMatriz = [[1, 5, 3], [1, 9, 3]]

function encontrarMaiorNumero (matriz) {
    let maior = matriz[0][0]
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            if(matriz[i][j] > maior) {
                maior = matriz[i][j]
            }
        }
    }
    return maior
}

console.log('O maior número da minha matriz é: ', encontrarMaiorNumero(myMatriz))
*/
/*
Funções avançadas: String

String é considerado um valor primitivo, porém ao ser interpretado o JS os converte em objetos, possuindo propriedades e métodos.
*/
/*
console.log('Marlon Muller'.length);

console.log('Marlon Muller'.charAt(5))

let nome = 'Gabriela'
console.log(nome.indexOf('a'))
console.log(nome.indexOf('A'))

let nome2 = 'Dick Vigarista'
console.log(nome2)
console.log(nome2.replace('Dick Vigarista', 'Pica Pau'))

let nome3 = 'Dick Vigarista'
console.log(nome3.substr('7', '5'))

let nome4 = 'Dick Vigarista'
console.log(nome4.toLocaleUpperCase())

let nome5 = 'Dick Vigarista'
console.log(nome5.toLocaleLowerCase())

let nome6 = ' BATMAN '
console.log('-' + nome6.trim() + '-')
*/

//Funções avançadas: Matemáticas

/*
//Arredondar para cima
let x = Math.ceil(10.100)
console.log(x)

//Arredondar para baixo
let a = Math.floor(10.100)
console.log(a)

//Arredondar para cima se acima de 0,5 e para baixo se abaixo se abaixo de 0,5
let b = Math.round(10.100)
console.log(b)

//Número aleatório entre 0 e 1
let c = Math.random()
console.log(c)
*/
//Funções avançadas: Datas

let data = new Date()

console.log(data.getDate())

console.log(data.getMonth())

console.log(data.getFullYear())

console.log(`${data.getDate()} / 0${data.getMonth()+1} / ${data.getFullYear()}`)

console.log(data.toString())

data.setDate(data.getDate() + 720)
console.log(data.toString())

console.log(data.getTime())

let data1 = new Date()

let milisegundosEntreDatas = Math.abs(data.getTime() - data1.getTime())

console.log(milisegundosEntreDatas)



