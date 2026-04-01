var valores = [true, 5, false, "hola", "adios", 2];

document.getElementById("btnEjercicio2").addEventListener("click", () => {
   
    const texto1 = valores[3]; 
    const texto2 = valores[4]; 
    const mayor = (texto1.length > texto2.length) ? texto1 : texto2;
    
    console.log("1. El texto con más caracteres es:", mayor);

   
    const bool1 = valores[0]; 
    const bool2 = valores[2]; 

    
    const resultadoTrue = bool1 || bool2; 
    
    const resultadoFalse = bool1 && bool2;

    console.log("2. Resultado True (true || false):", resultadoTrue);
    console.log("2. Resultado False (true && false):", resultadoFalse);

    const num1 = valores[1]; 
    const num2 = valores[5]; 

    console.log("3. Operaciones matemáticas:");
    console.log(`Suma: ${num1 + num2}`);
    console.log(`Resta: ${num1 - num2}`);
    console.log(`Multiplicación: ${num1 * num2}`);
    console.log(`División: ${num1 / num2}`);
    console.log(`Módulo (Resto): ${num1 % num2}`);
    
    alert("¡Ejercicio 2 completado! Revisa la consola (F12).");
});