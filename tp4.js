    document.getElementById("btnEjercicio4").addEventListener("click", () => {
    
        var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    
        var numeroDNI = prompt("Introduce tu número de DNI (sin letra):");
        var letraUsuario = prompt("Introduce la letra de tu DNI (en mayúscula):");

        
        numeroDNI = parseInt(numeroDNI);

    
        if (numeroDNI < 0 || numeroDNI > 99999999) {
            alert("El número proporcionado no es válido.");
        } 
        else {
        
            var resto = numeroDNI % 23;
            var letraCalculada = letras[resto];

            if (letraCalculada !== letraUsuario.toUpperCase()) {
                alert("La letra que has indicado no es correcta. Tu letra debería ser: " + letraCalculada);
            } else {
                alert("¡Perfecto! El número y la letra de DNI son correctos.");
            }
        }
    });