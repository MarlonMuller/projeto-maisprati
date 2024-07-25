/*
36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a mensagem "Parabéns, tu foi o GANHADOR".
*/
const gabarito = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1];

function verificarApostadores(apostadores){
    apostadores.forEach(apostador => {
        const numeroCartao = apostador.numeroCartao
        const respostas = apostador.respostas
        let acertos = 0
        for(let i = 0; i < gabarito.length; i++) {
            if (respostas[i] === gabarito[i]){
                acertos++
            }
        }

        console.log(`Apostador ${numeroCartao}: ${acertos} acertos.`)
        if (acertos === 13) {
            console.log('Parabéns, tu foi o GANHADOR')
        }
    })
}

const apostadores = []
for(let i = 1; i <= 100; i++){
    const respostas = Array.from({length:13}, () => Math.floor(Math.random() *3) +1)
    apostadores.push({numeroCartao: i, respostas: respostas})
}

verificarApostadores(apostadores)