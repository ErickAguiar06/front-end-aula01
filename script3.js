function reajustar() {
    let nomeProduto = document.getElementById('mercadoria-nome').value;
    let preco = Number(document.getElementById('mercadoria').value);
    let resultado = document.getElementById('resultado');
    let valor = 0;
    
    if (preco < 1000) {
        valor = preco * 5 / 100;
    } else {
        valor = preco * 7 / 100;
    }
    let precoComAumento = preco + valor;

    resultado.innerHTML = `Produto: ${nomeProduto}<br> Aumento de R$ ${valor.toFixed(2)}<br> Preço final: R$ ${precoComAumento.toFixed(2)}`;
}
