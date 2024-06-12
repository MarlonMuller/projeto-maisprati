let valorCarrinho = document.getElementById('valorCarrinho')
let valorTotal = 0
let valorUnidade = 10


function adicionarAoCarrinho(id) {
    alert('Item adicionado ao carrinho')
    
    let qtdInput = document.getElementById(`qtd${id}`).value

    let quantidade = parseInt(qtdInput)
    
    
    valorTotal += valorUnidade * quantidade

    valorCarrinho.innerHTML = valorTotal
}