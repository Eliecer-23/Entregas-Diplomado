/**ejercicio 14: el array de compras */

function pedirProducto(){
    let compras = [];
    for (let i =0; 1 < 5; i++) {
        let producto = prompt(`Ingresa el producto ${i + 1}:`)
        
        /**validacion  */
    if (producto === null || producto.trim() === "") {
        alert(" producto vacio, intenta de nuevo.");
        i--;
    }else {
        compras.push(producto.trim());
    }
    }
}

 /**mostrar en html */
 for (let i = 0; i < compras.length; i++) {
    const li = document.createElement("li");
    li.textContent = compras[i];
    lista.appendchild(li);
 }