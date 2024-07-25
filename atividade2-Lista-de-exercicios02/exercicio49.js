/* 49. Você recebe um array de objetos representando transações financeiras. Cada
transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.
*/

const transacoes = [
    { id: 1, valor: 100, data: '2023-05-01', categoria: 'Alimentação' },
    { id: 2, valor: 200, data: '2023-05-02', categoria: 'Transporte' },
    { id: 3, valor: 50, data: '2023-05-03', categoria: 'Alimentação' },
    { id: 4, valor: 150, data: '2023-05-04', categoria: 'Entretenimento' },
    { id: 5, valor: 80, data: '2023-05-05', categoria: 'Transporte' }
];

function agruparTransacoesPorCategoria(transacoes) {
    return transacoes.reduce((resultado, transacao) => {
        const { categoria, valor } = transacao
        
        if(!resultado[categoria]) {
            resultado[categoria] = {
                transacoes: [],
                subtotal: 0
            }
        }

        resultado[categoria].transacoes.push(transacao)
        resultado[categoria].subtotal += valor
        return resultado
    }, {})
}

const resultado = agruparTransacoesPorCategoria(transacoes);

console.log(JSON.stringify(resultado, null, 2));