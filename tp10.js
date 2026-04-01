
        let apariciones = new Array(13).fill(0);
        const totalLanzamientos = 36000;

        for (let i = 0; i < totalLanzamientos; i++) {
            let dado1 = Math.floor(Math.random() * 6) + 1;
            let dado2 = Math.floor(Math.random() * 6) + 1;
            let suma = dado1 + dado2;
            
            apariciones[suma]++;
        }

        const tablaBody = document.querySelector("#tablaResultados tbody");

        for (let suma = 2; suma <= 12; suma++) {
            let fila = `<tr>
                <td class="highlight">${suma}</td>
                <td>${apariciones[suma].toLocaleString()}</td>
            </tr>`;
            tablaBody.innerHTML += fila;
        }