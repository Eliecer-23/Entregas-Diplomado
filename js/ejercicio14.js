/**ejercicio 14: el array de compras */
/** pedir 5 Producto */

function pedirProducto() {
    let compras = [];

        
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
    return compras; /**devolvemos el array */
}

 /** ejecutar funcion */ lis
let ListaCompras = pedirProducto

 /**mostrar en html */
    const contenedor = document.getElementById("ejercicio14");

    contenedor.innerHTML += "<h3>Lista de compras ingresadas:</h3>";

    for (let i = 0; i < ListaCompras.length; i++) {
        contenedor.innerHTML += `.${ListaCompras[i]} <br>`;
    }
 