/**ejercicico 18: Carrito con descuento */

    let total18 = 0;
    let precio18;

    do {
        precio18 = parseFloat(prompt("Ingresa el precio del producto (0 para terminar):"));
        if (!isNaN(precio18) && precio18 > 0) {
            total18 += precio18;
        }
    } while (precio18 !== 0);

    /**aplicacion de descuento */
    if (total18 > 100) {
        total18 = total18 * 0.90; /** 10% descuento */
    }

    let contenedor = document.getElementById("ejercicio18");

    contenedor.innerHTML = `
    <h3> Total del carrito:</h3>
    total a pagar: $${total18.toFixed(2)} <br>`;
