/**ejercicio 11:la clave maestra con while  */

    let clave = prompt("Ingresa la contraseña:")
    const correcta = "SESAMO123";

    while (clave !== correcta) {
        clave = prompt("Contraseña incorrecta. Intenta de nuevo:");
    }
    document.write("Contraseña incorrecta. Intenta de nuevo:");

 {
    const correcta = "SESAMO123";
    let clave;
    do {
        clave = prompt("ngresa la contraseña:");
    }while (clave !== correcta);
    document.write("Acceso concedido. Contraseña correcta.");
 }
