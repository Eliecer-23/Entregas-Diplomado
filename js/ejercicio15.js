/**ejercicio 15: Buscador de nombres */

    let nombre = ["Ana", "Luis", "Carlos", "Maria", "Jorge"];
    let buscar = prompt("Ingresar un nombre para buscaar:");
    let encontrado = false;

    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i].toLowercase() === buscar.toLowerCase()) {
            encontrado = true;
            break;
        }
    }
    if (encontrado) {
        document.write(" El nombre " + buscar + "Si esat en la lista . <br>");
    } else {
        document.write(" el nombre " + buscar + " NO esta en la lista. <br>");
    }
 
