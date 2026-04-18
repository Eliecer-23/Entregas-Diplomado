







    


    



    

   

 
   
    /**Ejercicio 16: Objeto auto */

    let auto = {
        marca: "Toyota",
        modelo: "Corola",
        año: 2018

    };

    let nuevoAño = parseInt(prompt("Ingresa el nuevo año del auto: "));
    auto.año = nuevoAño;
    
    document.write("<h3>auto actualizado: </h3>");
    document.write("Marca: " + auto.marca + "<br>");
    document.write("Modelo: " + auto.modelo + "<br>");
    document.write("Año " + auto.año + "<br>");

 {
    /** Ejercicio 17: Lista de estudiantes */

    let estudiantes = [];

    for (let i = 1; i <= 3; i++) {
        let nombre = prompt("Nombre del estudiante" + i + ":");
        let nota = parseFloat(prompt("Nota del estudiante " + i + ":"));

        let estudiante = {
            nombre: nombre,
            nota: nota
        };

        estudiantes.push(estudiante);

    } 

    document.write("<h3>Lista de estudiantes:<h3>");
    for (let i = 0; i < estudiantes.length; i++) {
        document.write(
            estudiantes[i].nombre + "- Nota:" + estudiantestudiante[i].nota + "<br>");
    }
 }

 {
    /**ejercicico 18: Carrito con descuento */

    let total = 0;
    let precio;

    do {
        precio = parseFloat(prompt("Ingresa el perecio del produccto (0 para terminar):"));
        if (precio > 0) {
            total += precio;
        }
    } while (precio !== 0);

    if (total > 100) {
        total = total * 0.90; /** 10% descuento */
    }

    document.write("total a pagar: $" + total + "<br>");
 }

 {
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
 }

 {
    /**Ejercicio 20: Reemplazo de Array */

    let numeros = [ 10, 20, 30, 40, 50];
    
    let nuevovalor = parseInt(prompt("ingresa un nuevo numero:"));
    let posicion = parseInt(prompt("Ingresa la posicion a reemplazar (0 a 4);"));

    if (posicion >= 0 && posicion < numeros.length) {
        numeros[posicion] = nuevoValor;
    } else {
        document.write("Posicion invalida. <br>");
    }
    document.write("<h3>Array Final:</h3>");
    for (let i = 0; i < numeros.length; i++) {
        document.write(numeros[i] + "<br>");
    }
 }