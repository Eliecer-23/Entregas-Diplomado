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
