/**ejercicio 10: Buscador de Multiplos */

    for(let i = 1; i <= 50; i++){
        if (i % 5 === 0) {
            document.write("Multiplo de 5: " + i + "<br>");
        }
    }


{
    let i =1;
    
    

    while (i <= 50) {
        if ( i % 5 === 0) {
           document.write("Multiplo de 5: " + i + "<br>"); 
        }
        i++;
    }
}

{
    let i = 1;

    do {
        if (i % 5 === 0) {
            document.write("Multiplo de 5: " + i + "<br>");  
        }
        i++;
    } while (i <= 50);
}