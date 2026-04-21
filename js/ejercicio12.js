/** ejercicio 12: Tabla de Potencias*/
    /**for */
    let numero12 = parseInt(prompt("Ingresa un numero Para calcular sus potencias (FOR):"));

    for (let i = 1; i <= 5; i++) {
        let potencia = numero ** i;
        document.getElementById("ejercicio12").innerHTML += 
        numero12_for + " elevado a " + i + "=" + potencia + "(for)<br>";
    }
 

    /**while */
     let numero12 = parseInt(prompt("Ingresa un numero Para calcular sus potencias (while):"));
     let w12 = 1;

     while (w12 <= 5) {
        let potencia = numero12 ** w12;
        document.getElementById("ejercicio12").innerHTML +=
        numero12 + "elevado a " + w12 + "=" + potencia + "(while)<br>";
        w12++;  
     }
 
     /**do while */

    let numero12_do = parseInt(prompt("Ingresa un numero Para calcular sus potencias (do while):"));
     let d12 = 1;
     do {
        let potencia = numero12_do ** d12;
        document.getElementById("ejercicio12").innerHTML +=
        numero12_do + "elevado a " + d12 + "=" + potencia + "(do while)<br>";
        d12++;
     } while (d12 <= 5);
  

 