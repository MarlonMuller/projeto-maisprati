/* 48. Você recebe dois objetos que representam o inventário de duas lojas diferentes:
inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
item em estoque. Escreva uma função que combine os inventários em um único objeto.
Se um item aparecer em ambas as lojas, some as quantidades.
*/

const inventarioLojaA = {
    'maçã': 3,
    'pera': 3,
    'melancia': 3
}

const inventarioLojaB = {
    'banana': 3,
    'maçã': 3,
    'uva': 3
}

function combinarInventarios (inventarioLojaA, inventarioLojaB) {
    const inventarioCombinado = {}
    for(let item in inventarioLojaA) {
        if(inventarioLojaA.hasOwnProperty(item)) {
            inventarioCombinado[item] = inventarioLojaA[item]
        }
    }

    for(let item in inventarioLojaB) {
        if(inventarioLojaB.hasOwnProperty(item)) {
            if(inventarioCombinado.hasOwnProperty(item)) {
                inventarioCombinado[item] += inventarioLojaB[item]
            } else {
                inventarioCombinado[item] = inventarioLojaB[item]
            }
        }
    }
    return inventarioCombinado
}

const inventarioFinal = combinarInventarios(inventarioLojaA, inventarioLojaB)

console.log(inventarioFinal)