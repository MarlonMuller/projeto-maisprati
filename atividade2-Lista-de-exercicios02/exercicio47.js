/*
47. Crie uma função que transforme um objeto de entrada aplicando uma função
fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os resultados.
*/

const objetoOriginal = {
    a: 2,
    b: 3,
    c: 4
}

function dobrarValores (objeto) {
    const resultado = {}
    for(const key in objeto) {
        if(objeto.hasOwnProperty(key)) {
            resultado[key] = objeto [key] * 2
        }
    }
    return resultado
}

const novoObjeto = dobrarValores(objetoOriginal)

console.log(novoObjeto)