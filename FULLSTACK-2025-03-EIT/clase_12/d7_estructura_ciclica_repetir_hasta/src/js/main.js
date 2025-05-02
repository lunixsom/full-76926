/*
    ESTRUCTURA CÍCLICA REPETIR-HASTA
*/

let isInvalidOption = true;
do {
    let option = Number.parseInt(window.prompt("Ingresa una opción: (1, 2, 3)"));

    if (option == 1 || option == 2 || option == 3) {
        isInvalidOption = false;
        window.alert("Opción válida");
    }
} while (isInvalidOption);