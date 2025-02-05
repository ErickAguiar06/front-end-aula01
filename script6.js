function verificarnumero() {
    let num1 = Number(document.getElementById('numero1').value);
    let num2 = Number(document.getElementById('numero2').value);

    let maiorNumero = num1 > num2 ? num1 : num2;
    let menorNumero = num1 < num2 ? num1 : num2;

    document.getElementById('resultado').innerHTML = `O maior número é: ${maiorNumero}<br>O menor número é: ${menorNumero}`;
}
