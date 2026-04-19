/**ejercicio 10: Buscador de Multiplos */

    for(let i = 1; i <= 50; i++){
        if (i % 5 === 0) {
            document.getElementById("ejercicio10").innerHTML +="multiplo de 5 (for): " + i + "<br>"
        }
    }


    /**while */
    let w10 =1;
    
    

    while (w10 <= 50) {
        if (w10 % 5 === 0) {
           document.getElementById("ejercicio10").innerHTML += "multiplo de 5 (while): " + w10 + "<br>"
        }
        w10++;
    }


    /**do while */
    let d10 = 1;

    do {
        if (d10 % 5 === 0) {
          document.getElementById("ejercicio10").innerHTML += "multiplo de 5 (do while): " + d10 + "<br>"    
        }
        d10++;
    } while (d10 <= 50);