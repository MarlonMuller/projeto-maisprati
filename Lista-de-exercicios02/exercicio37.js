/*
37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor
de respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
e mostre uma mensagem de “REPROVADO”, caso contrário.
*/

const gabarito = ['A', 'B', 'C', 'C', 'A', 'A', 'B', 'C', 'B', 'B', 'A', 'B', 'C', 'A', 'C', 'A', 'B', 'C', 'C', 'A'];


function verificarRespostas (alunos) {
    alunos.forEach(aluno => {
        const numeroAluno = aluno.numeroAluno
        const respostas = aluno.respostas
        let acertos = 0

        for(let i = 0; i < gabarito.length; i++){
            if(respostas[i] == gabarito[i]){
                acertos++
            }
        }
        console.log(`Aluno ${numeroAluno}: ${acertos} acertos`)
        if(acertos >= 12){
            console.log('APROVADO')
        } else {
            console.log('REPROVADO')
        }
    })
}




const alunos = []
for(let i = 1; i <= 50; i++){
    const respostas = Array.from({length:20}, () => {
        const respostasPossiveis = ['A', 'B', 'C']
        return respostasPossiveis[Math.floor(Math.random()* respostasPossiveis.length)]
        
    })
    alunos.push({numeroAluno: i, respostas: respostas})
}

verificarRespostas(alunos)




