    document.getElementById("btnEjercicio5").addEventListener("click", () => {
        
        let numero = prompt("Introduce un número entero para calcular su factorial:");
        numero = parseInt(numero);
        
        if (isNaN(numero) || numero < 0) {
            alert("Por favor, introduce un número entero positivo.");
        } else {
        
            let resultado = 1;
            for (let i = numero; i > 0; i--) {
                resultado = resultado * i;
            }
            console.log("El factorial de " + numero + " es: " + resultado);
            alert("El factorial de " + numero + " es: " + resultado);
        }
    });