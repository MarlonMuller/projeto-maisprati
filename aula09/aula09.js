// Objetos
/*
const pessoa = {
    nome: "Marlon",
    idade: 27,
    profissao: "Desenvolvedor de sistemas",
    email: "marlon@teste.com",
    empregada: true
}

console.log(pessoa)

// Deletar atributo

delete pessoa.empregada
console.log(pessoa)

pessoa.falar = function () {
    return `Meu nome é ${this.nome}, tenho ${this.idade} de idade e sou ${this.profissao}`
}

console.log(pessoa.falar())
*/

// Construir um objeto de casa
/*
const celular = {
    marca: "Tectoy",
    altura: 12,
    largura: 5,
    cor: "preto",
    bateria: true
}

celular.ligar = function () {
    return `Sou o celular da ${this.marca} e estou ligando agora...`
}

console.log(celular)
console.log(celular.ligar())
*/
/*
const pessoa = {
    nome: "Marlon",
    idade: 27,
    profissao: "Desenvolvedor de sistemas",
    email: "marlon@teste.com",
    empregada: true
}

// for in

for (let chave in pessoa) {
    console.log(chave + ": " + pessoa[chave])
}
*/
/*
let numeros = [10, 20, 100]

// for of

for (let numero of numeros) {
    console.log(numero)
}
*/

/*
Você tem uma lista de objetos que representam diferentes tipos de veículos e suas características. Seu objetivo é primeiro usar o FOR IN para listar todas as propriedades e valores de cada veículo. Depois, utilizar o FOR OF para listar apenas os modelos dos veículos.
*/
/*
const carros = [{
    marca: 'fiat',
    modelo: 'uno', 
    ano: 1998,
    caracteristica: 'escada em cima'
}, 
{
    marca: 'chevrolet',
    modelo: 'onix', 
    ano: 2010,
    caracteristica: 'ar condicionado'
},
{
    marca: 'fiat',
    modelo: 'mobi', 
    ano: 2018,
    caracteristica: 'direção elétrica'
}

]

for(carro in carros) {
    console.log(carros[carro])
}

for(carro of carros) {
    console.log(`Modelo: ${carro['modelo']}`)
}
*/

//forEach
/*
let cores = ['Azul', 'Preto', 'Branco']

cores.forEach((cor, indice) => {
    console.log(indice + ': ' + cor) }
)
*/

/*
Construa um array de números e calcule a soma total dos números e também imprima cada número multiplicado por dois.
*/
/*
const myNumbers = [2, 5, 8, 7, 3];
let soma = 0;
let dobro;

myNumbers.forEach(element => {
    soma += element;
    dobro = element * 2
    console.log(dobro) 
});

console.log(`A soma final é ${soma}`)

*/

let BicicletaFactory = function(cor, tipo, marca) {
    return {
        cor,
        tipo,
        marca
    }
}

let bicicleta1 = BicicletaFactory('Azul', 'Speed', 'Caloi')
let bicicleta2 = BicicletaFactory('Vermelha', 'Speed', 'Caloi')
let bicicleta3 = BicicletaFactory('Branca', 'Speed', 'Caloi')

console.log(bicicleta1)
console.log(bicicleta2)
console.log(bicicleta3)




