/**ejercicio 15: Buscador de nombres */

    let nombres = ["Ana", "Luis", "Carlos", "Maria", "Jorge"];
    let buscar = prompt("Ingresar un nombre para buscaar:");
    let encontrado = false;

    /**validacion de entrada */
    if (buscar === null) {
        alert("canclaste la busqueda.");    
    } else {
        buscar = buscar.trim();

        if (busca ==="") {
            alert('No ingresaste ningun nombre.');
        } else {
            let textoBusqueda = buscar.toLowerCase();

            let encontrado = nombres.some(
                nombre => nombre.toLowerCase() === textoBusqueda
            );
            let encontrado =document.getElementById("ejercicio15");
           

        contenedor.innerHTML = encontrado
        ?`el nombre <strong>${buscar}</strong> SI esta en la lista.<br>`
         
        :` el nombre <strong>${buscar}</strong> NO esta en la lista. <br>`;
        }
    }

