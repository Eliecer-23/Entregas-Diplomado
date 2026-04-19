/**ejercicio 14: el array de compras */


    let compras = [];

    /** pedir 5 Producto */
    for (let i = 0; i < 5; i++) {
        let producto = prompt(`Ingresa el producto ${i + 1}:`)
        
        /**validacion  */
    if (producto === null || producto.trim() === "") {
        alert(" producto vacio, intenta de nuevo.");
        i--;
    }else {
        compras.push(producto.trim());
    }
    }


 /**mostrar en html */
    let contenedor = document.getElementById("ejercicio14");
    contenedor.innerHTML += `. ${compras [i]} <br>`;
 