
let carrinhoDeCompras = [];

function adicionar() {
    let listaDeProdutos = document.getElementById('produto');
    let produtoEscolhido = listaDeProdutos.querySelector('produto')
    let valorDoProduto = listaDeProdutos.querySelector('produto-input')

    console.log(`${produtoEscolhido}, ${valorDoProduto}`);

    produtoEscolhido.push(carrinhoDeCompras);
    valorDoProduto.push(carrinhoDeCompras);
}

function limpar() {
    carrinhoDeCompras = [];
    let valorTotal = document.getElementById('valor-total')
    valorTotal.textContent = R$0,00 ;
}