function calculasalario() {
    const salario = parseFloat(document.getElementById('salario').value);
    const resultado = document.getElementById('salarioFinal');

    if (isNaN(salario) || salario <= 0) {
        resultado.innerHTML = '<span class="erro">Por favor, insira um valor válido para o salário.</span>';
        return;
    }

    let aumento = 0;

    if (salario >= 1500, salario < 1750) {
        aumento = salario * 15 / 100;
    } else if (salario >= 1750, salario < 2000) {
        aumento = salario * 12 / 100;
    } else if (salario >= 2000, salario < 3000) {
        aumento = salario * 9 / 100;
    } else if (salario >= 3000) {
        aumento = salario * 6 / 100;
    }

    const salarioFinal = salario + aumento;

    resultado.innerHTML = `Salário Final: R$ ${salarioFinal.toFixed(2)}`;
}