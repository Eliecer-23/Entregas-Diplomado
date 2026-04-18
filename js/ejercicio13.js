    /**ejercicio 13 */
    /**filtro de positivos: do-while */

    let numero;
    
    do {
        numero = parseInt(prompt("Ingresa un numero (negativo para determinar):"));
        if (numero >= 0) {
            document.write("Numero Ingresado: " + numero +"<br>");
        }

    }while (numero >= 0);

    document.write("Has ingresado un numero negativo. Fin del ejercicio. <br>");

 