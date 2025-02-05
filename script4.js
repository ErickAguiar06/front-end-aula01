function verificarMaior() {

    let num1 = Number(document.getElementById('numero1').value);
    let num2 = Number(document.getElementById('numero2').value);
    let num3 = Number(document.getElementById('numero3').value);
    let num4 = Number(document.getElementById('numero4').value);
    let num5 = Number(document.getElementById('numero5').value);
    let num6 = Number(document.getElementById('numero6').value);

    let maiorNumero = Math.max(num1, num2, num3, num4, num5, num6);

    document.getElementById('resultado').innerHTML = `O maior número digitado foi: ${maiorNumero}`;
}