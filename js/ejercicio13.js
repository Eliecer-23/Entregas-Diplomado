    /**ejercicio 13 */
    /**filtro de positivos: do-while */

    let numero13;
    
    do {
        numero13 = parseInt(prompt("Ingresa un numero (negativo para determinar):"));
        if (numero13 >= 0) {
            document.getElementById("ejercicio13").innerHTML += "Numero Ingresado: " + numero13 +"<br>";
        }

    }while (numero13 >= 0);

    document.getElementById("ejercicio13").innerHTML += "has Ingresado un numero negativo. Fin del ejercicio.<br";

 