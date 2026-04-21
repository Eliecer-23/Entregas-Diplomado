/** ejercicio 12: Tabla de Potencias*/
    /**for */
    let numeroFor = parseInt(prompt("Ingresa un numero Para calcular sus potencias (FOR):"));

    for (let i = 1; i <= 5; i++) {
        let potencia = numeroFor ** i;
        document.getElementById("ejercicio12").innerHTML += 
        numeroFor + " elevado a " + i + "=" + potencia + "(for)<br>";
    }
 

    /**while */
     let numeroWhile = parseInt(prompt("Ingresa un numero Para calcular sus potencias (while):"));
     let w12 = 1;

     while (w12 <= 5) {
        let potencia = numeroWhile ** w12;
        document.getElementById("ejercicio12").innerHTML +=
        numeroWhile + "elevado a " + w12 + "=" + potencia + "(while)<br>";
        w12++;  
     }
 
     /**do while */

    let numeroDo = parseInt(prompt("Ingresa un numero Para calcular sus potencias (do while):"));
     let d12 = 1;
     do {
        let potencia = numeroDo ** d12;
        document.getElementById("ejercicio12").innerHTML +=
        numeroDo + "elevado a " + d12 + "=" + potencia + "(do while)<br>";
        d12++;
     } while (d12 <= 5);
  

 