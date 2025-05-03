// Desafio semanal F1-05

// Definición de límites
const lowerLimit = 100000;
const upperLimit = 300000;
// Definición de variable para continuar en el bucle
let proceed = false;


let name = window.prompt("Por favor, ingresa tu nombre:");

do {
    // Definición de variable gastos
    let expenses = 0;
    let travelType = "";

    do {
        travelType = window.prompt("¿Qué tipo de viaje realizaste? (Opciones: laboral / placer / familiar)").toLowerCase();

        switch (travelType) {
            case "laboral":
                alert("¡Esperamos que tu viaje laboral haya sido productivo!");
                break;
            case "placer":
                alert("¡Nos alegra que hayas disfrutado tu viaje de placer!");
                break;
            case "familiar":
                alert("¡Qué bueno que hayas compartido tiempo con tu familia!");
                break;
            default:
                alert("Tipo de viaje no reconocido. Por favor, ingresa 'laboral', 'placer' o 'familiar'.");
        }
    } while (travelType !== "laboral" && travelType !== "placer" && travelType !== "familiar");

    // Solicitar gastos al usuario
    expenses += parseInt(window.prompt("¿Cuánto gastaste en combustible?"));
    expenses += parseInt(window.prompt("¿Cuánto gastaste en alimentación?"));
    expenses += parseInt(window.prompt("¿Cuánto gastaste en hospedaje?"));

    if (window.confirm("¿Realizaste otros gastos durante el viaje?")) {
        let extraExpensesAmount = parseInt(window.prompt("¿Cuántos gastos adicionales realizaste?"));
        for (let i = 0; i < extraExpensesAmount; i++) {
            expenses += parseInt(window.prompt("Ingresa el monto del gasto adicional #" + (i+1)));
        }
    }


    alert(name + ", el total de gastos durante tu viaje laboral fue de $" + expenses);

    if (expenses < lowerLimit) {
        alert("¡Excelente! Mantuviste tus gastos al mínimo.")
    } else if (expenses > lowerLimit && expenses < upperLimit) {
        alert("Moderado. ¡Podrías ahorrar un poco más!")
    } else {
        alert("¡Atención! Tus gastos fueron muy elevados.");
    }

    proceed = window.confirm("¿Quieres calcular los gastos de otro viaje? (Aceptar = Sí / Cancelar = No)");
} while (proceed);

alert("¡Gracias por usar el sistema de control de gastos!");