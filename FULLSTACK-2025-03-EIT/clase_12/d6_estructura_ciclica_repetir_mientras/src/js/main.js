/*
    ESTRUCTURA CÍCLICA REPETIR-MIENTRAS
*/

let counterA = 1;
while (counterA <= 10) {
    console.log("Iteración A:", counterA);
    counterA++;
}

let counterB = 0;
while (counterB <= 5) {
    console.log("Iteración B:", counterB);
    counterB++;
}

let isInvalidOption = Boolean(window.confirm("Te muestro las opciones válidas?"));
while (isInvalidOption) {
    let option = Number.parseInt(window.prompt("Ingresa una opción: (1, 2, 3)"));

    if (option == 1 || option == 2 || option == 3) {
        isInvalidOption = false;
        window.alert("Opción válida");
    }
}