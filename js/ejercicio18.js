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
