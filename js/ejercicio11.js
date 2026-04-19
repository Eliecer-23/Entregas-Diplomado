/**ejercicio 11:la clave maestra con while  */
    /**while */
    let clave1 = prompt("Ingresa la contraseña:")
    const correcta1 = "SESAMO123";

    while (clave1 !== correcta1) {
        clave1 = prompt("Contraseña incorrecta. Intenta de nuevo:");
    }
    document.getElementById("ejercicio11").innerHTML += "acceso concedido (while). contraseña correcta.<br>";

    /** do while */
    const correcta2 = "SESAMO123";
    let clave2;
    do {
        clave2 = prompt("ifngresa la contraseña:");
    }while (clave2 !== correcta2);
    document.getElementById("ejercicio11").innerHTML += "acceso concedido (do while). contraseña correcta. <br>";
