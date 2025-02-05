function ordenarNumeros() {

    let num1 = Number(document.getElementById('numero1').value);
    let num2 = Number(document.getElementById('numero2').value);
    let num3 = Number(document.getElementById('numero3').value);
    let num4 = Number(document.getElementById('numero4').value);
    let num5 = Number(document.getElementById('numero5').value);

    let numeros = [num1, num2, num3, num4, num5];
    numeros.sort((a, b) => a - b);

    document.getElementById('resultado').innerHTML = `Os números em ordem crescente são: ${numeros.join(', ')}`;
}
