/** ejerrcicio 9: suma acumulativa */
    /**for */
     let N1 = parseInt(prompt("ingresa un numero para sumar desde 1 hasta N (for):"));
     let suma1 = 0;

     for (let i = 1; i <= N1; i++) {
        suma1 += i;
     }
    document.getElementById("ejercicio9").innerHTML += "la suma desde 1 hasta " + N1 + " es: " + suma1 + "(for)<br>"

    /**while */
    let N2 = parseInt(prompt("ingresa un numero para sumar desde 1 hasta N (while):"));
    let suma2 = 0;
    let w = 1;

     while (w <= N2) {
        suma2 += w;
        w++;
     }
      document.getElementById("ejercicio9").innerHTML += "la suma desde 1 hasta N2" + N2 + " es: " + suma2 + "(while)<br>";


     /**do while */
    let N3 = parseInt(prompt("ingresa un numero para sumar desde 1 hasta N (do while):"));
    let suma3 = 0;
    let d = 1;

    do {
       suma3 += d;
        d++; 
    } while (d <N3);

    document.getElementById("ejercicio9").innerHTML += "la suma desde 1 hasta " + N3 + " es: " + suma3 + " (do while)<br>";
    