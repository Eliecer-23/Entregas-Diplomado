 /**ejercicio 19: El menu Infinito */

    let opcion;

    do {
        opcion = parseInt(prompt("Menu:\n1. saludar\n2. Despedirse\n3. salir\nElegir una opcion:"));

        if (opcion === 1) {
            document.write("Hola, Usuario!<br>");
        } else if (opcion ===2) {
            document.write("Adios, Usuario!<br>");
        }
    } while (opcion !== 3);
    document.write("has salido del men. <br>");
 