/** ejercicio 12: Tabla de Potencias*/
    /**for */
    let numero = parseInt(prompt("Ingresa un numero Para calcular sus potencias:"));

    for (let i = 1; i <= 5; i++) {
        let potencia = numero ** i;
        document.getElementById("ejercicio12").innerHTML += 
        numero1 + " elevado a " + i + "=" + potencia + "(for)<br>";
    }
 

    /**while */
     let numero2 = parseInt(prompt("Ingresa un numero Para calcular sus potencias (while):"));
     let w = 1;

     while (w <= 5) {
        let potencia = numero2 ** w;
        document.getElementById("ejercicio12").innerHTML +=
        numero2 + "elevado a " + w + "=" + potencia + "(while)<br>";
        w++;  
     }
 
     /**do while */

    let numero3 = parseInt(prompt("Ingresa un numero Para calcular sus potencias (do while):"));
     let d = 1;
     do {
        let potencia = numero3 ** d;
        document.getElementById("ejercicio12").innerHTML +=
        numero3 + "elevado a " + d + "=" + potencia + "(do while)<br>";
        d++;
     } while (d <= 5);
  

 