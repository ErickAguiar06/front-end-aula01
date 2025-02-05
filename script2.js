function calcularTipoTriangulo() {
    
    let a = Number(document.getElementById('ladoA').value);
    let b = Number(document.getElementById('ladoB').value);
    let c = Number(document.getElementById('ladoC').value);
    let resultado = document.getElementById('resultado');
   
    
    if (a === b & b === c) {
        resultado.innerHTML = "Triângulo Equilátero";
    } else if (a === b || b === c || a === c) {
        resultado.innerHTML = "Triângulo Isósceles";
    } else {
        resultado.innerHTML = "Triângulo Escaleno";
    }
}
