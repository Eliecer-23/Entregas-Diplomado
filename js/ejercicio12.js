/** ejercicio 12: Tabla de Potencias*/
    /**for */
    let numerofor = parseInt(prompt("Ingresa un numero Para calcular sus potencias (FOR):"));

    for (let i = 1; i <= 5; i++) {
        let potencia = numero ** i;
        document.getElementById("ejercicio12").innerHTML += 
        numero12_for + " elevado a " + i + "=" + potencia + "(for)<br>";
    }
 

    /**while */
     let numeroWhile = parseInt(prompt("Ingresa un numero Para calcular sus potencias (while):"));
     let w12 = 1;

     while (w <= 5) {
        let potencia = numero12 ** w12;
        document.getElementById("ejercicio12").innerHTML +=
        numero12 + "elevado a " + w + "=" + potencia + "(while)<br>";
        w++;  
     }
 
     /**do while */

    let numeroDo = parseInt(prompt("Ingresa un numero Para calcular sus potencias (do while):"));
     let d = 1;
     do {
        let potencia = numeroDo ** d;
        document.getElementById("ejercicio12").innerHTML +=
        numeroDo + "elevado a " + d + "=" + potencia + "(do while)<br>";
        d++;
     } while (d <= 5);
  

 