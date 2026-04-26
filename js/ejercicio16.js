/**Ejercicio 16: Objeto auto */

    let auto = {
        marca: "Toyota",
        modelo: "Corolla",
        año: 2018
    };
    /**solicitar año */
    let nuevoAño = parseInt(prompt("Ingresa el nuevo año del auto: "));
    
    /**Validacion basica */
    if (isNaN(nuevoAño)) {
        auto.año = nuevoAño;
    }
    
    console.log(auto);
    console.log("marca:" , auto.marca);
    console.log("modelo:" , auto.modelo);
    console.log("año:" , auto.año);
    
    /* let contenedor = document.getElementById("ejercicio16");
    contenedor.innerHTML =`
    <h3>auto actualizado:</h3>
    marca: $ {auto.modelo} <br>
    año: ${auto.año} <br>
    `; */
    
    
