 /**ejercicio 19: El menu Infinito */

    let opcion19;
    let contenedor19 = document.getElementById("ejercicio19");

    contenedor19.innerHTML = "<h3>resultados del menu:</h3>";

    do {
        opcion19 = parseInt(prompt("Menu:\n1. saludar\n2. Despedirse\n3. salir\n\nElegir una opcion:"));
        

        if (opcion19 === 1) {
            contenedor19.innerHTML += "hola, usuraio!<br>";
        } else if (opcion19 === 2) {
            contenedor19.innerHTML += " Adios, Usuario!<br>";
        }else if (isNaN(opcion19)) {
            contenedor19.innerHTML += "opcion invalida. ingresar un numero.<br>";
        }
        
    } while (opcion19 !== 3);
            contenedor19.innerHTML += "has salido del Menu.<br>";
 