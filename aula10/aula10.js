/*
const professor = {
    nome: "Tony Stark",
    materia: "Matemática",
    notas: {
        aluno1: 3.5,
        aluno2: 4.0,
        aluno3: 2.8
    }
}


For in para iterar sobre as propriedades dentro das notas, calcule a média
da turma . Caso a média esteja acima de 3.0, indique que a turma está acima da média de aprovação.


let somaNotas = 0
let numeroDeAlunos = 0


for (let aluno in professor.notas) {
    somaNotas += professor.notas[aluno]
    numeroDeAlunos++
}

let media = somaNotas / numeroDeAlunos

console.log(`A média das notas é ${media.toFixed(2)}`)
console.log(media >= 3 ? `A turma do ${professor.nome} está acima da média de aprovação`: `A turma está abaixo da média`)

*/
/*
const biblioteca = [
    { titulo: '12 Regras para Vida', autor: 'Jordan Peterson', ano: 1925 },
    { titulo: 'O Hobbit', autor: 'J.R.R. Tolkien', ano: 1937 },
    { titulo: 'Senhora do jogo', autor: 'Sidney Sheldon', ano: 2009 },
    { titulo: 'Zé Carioca', autor: 'Disney', ano: 1940 },
    { titulo: 'Naçao Dopamina', autor: 'Anna Lembke', ano: 2021 },
]

 For of para iterar sobre o array biblioteca
 Para cada livro, verifique se foi publicado antes de 2000
 Imprimir o título e o ano do livros que atendem essa condição


for (const nome of biblioteca) {
    if(nome.ano < 2000) {
    console.log(`O livro ${nome.titulo}, escrito por ${nome.autor}, foi publicado em ${nome.ano}.`)
    }
}
*/
/*
const filmes = [
    { titulo: 'Tropa de Elite', genero: 'Ação' },
    { titulo: 'Capitão Fantástico', genero: 'Drama' },
    { titulo: 'O Poderoso Chefão', genero: 'Crime' },
    { titulo: 'Clube da Luta', genero: 'Drama' },
    { titulo: 'Oppenheimer', genero: 'Biografia' },
    { titulo: 'High School Musical', genero: 'Musical' },
    { titulo: 'Barbie', genero: 'Live action' },
]


Com forEach para iterar sobre o array, crie um objeto para armazenar a contagem de filmes por gênero
Para cada filme no array, verifique se o gênero ja existe no objeto contagem
Se existir, incremente a contagem, se não, adicione o gênero ao objeto com contagem inicial de l
Após loop, imprima cada gênero, e o número de filmes correspondente


let contagemGeneros = {};

filmes.forEach(filme => {
    if (contagemGeneros[filme.genero]) {
        contagemGeneros[filme.genero]++;
    } else {
        contagemGeneros[filme.genero] = 1;
    }
});

for (let genero in contagemGeneros) {
    console.log(`${genero}: ${contagemGeneros[genero]}`);
}
*/

/*PESQUISA BINÁRIA

Desenvolvam um algoritmo que seja capaz de receber uma lista e um valor correto.
Execute uma pesquisa binária para encontrar o valor certo.

*/
/*
const binarySearch = (list, item) => {
    let low = 0
    let high = list.length -1

    while(low <= high){
        const mid = Math.floor((low + high)/2)
        const guess = list[mid]

        if(guess === item) {
            return mid
        } else if (guess > item){
            high = mid -1
        } else {
            low = mid + 1
        }
    }
    return null
}

const myList = [1, 3, 5, 7, 9]

console.log(binarySearch(myList, 3))
*/
/**
   spread = espalhar
   rest = juntar
 */

   /* REST
let tituloArtigo = 'Movimento ágil'

console.log(...tituloArtigo)
console.log([...tituloArtigo])

let listaTimes = ['Grêmio', 'Football Porto Alegrense']
let listaTimes2 = ['São José', 'Pelotas']

let listaTimesCompletos = ['Flamengo', 'São Paulo', ...listaTimes, ...listaTimes2]

console.log(listaTimesCompletos)
*/

/* SPREAD 



function soma (...param) {
    let resultado = 0

    console.log(param)

    param.forEach(v => resultado += v)
    return resultado
}

console.log(soma(3, 8, 5, 7))

*/

function multiplicacao(m, ...p){
    console.log(m)
    console.log(p)

    let resultado = 0

    p.forEach(elemento => resultado += m * elemento)
    return resultado
}

console.log(multiplicacao(5, 7, 12, 3, 50))

// Teste