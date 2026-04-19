/**ejercicio 10: Buscador de Multiplos */

    for(let i = 1; i <= 50; i++){
        if (i % 5 === 0) {
            document.getElementById("ejercicio10").innerHTML +="multiplo de 5 (for): " + i + "<br>"
        }
    }


    /**while */
    let w =1;
    
    

    while (w <= 50) {
        if (w % 5 === 0) {
           document.getElementById("ejercicio10").innerHTML += "multiplo de 5 (while): " + w + "<br>"
        }
        w++;
    }


    /**do while */
    let d = 1;

    do {
        if (d % 5 === 0) {
          document.getElementById("ejercicio10").innerHTML += "multiplo de 5 (do while): " + d + "<br>"    
        }
        d++;
    } while (d <= 50);
