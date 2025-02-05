function calcularDesconto() {

    const produto = document.getElementById('produto').value;
    const preco = parseFloat(document.getElementById('preco').value);
    const resultado = document.getElementById('resultado');

    let desconto = 0;

    if (produto === "camisa") {
        desconto = 20
    } else if (produto === "bermuda") {
        desconto = 10; 
    } else if (produto === "calca") {
        desconto = 15;
    }
    const valorDesconto = (preco * desconto) / 100;
    const precoFinal = preco - valorDesconto;

    resultado.innerHTML = `Produto: ${produto.charAt(0).toUpperCase() + produto.slice(1)}<br>Desconto: ${desconto}%<br>Preço Final: R$ ${precoFinal.toFixed(2)}`;
}
