const EXPENSE_LIMIT_LOW = 100000;
const EXPENSE_LIMIT_MEDIUM = 300000;

let userName = window.prompt("Por favor, ingresa tu nombre:");

let repeatCalculation = false;
do {
    let tripType = window.prompt("¿Qué tipo de viaje realizaste? (Opciones: laboral / placer / familiar)");
    let commentary = '';

    switch (tripType) {
        case "laboral":
            commentary = "¡Esperamos que tu viaje laboral haya sido productivo!";
            break;
        case "placer":
            commentary = "¡Nos alegra que hayas disfrutado tu viaje de placer!";
            break;
        case "familiar":
            commentary = "¡Qué bueno que hayas compartido tiempo con tu familia!";
            break;
        }

    let expenseFuel = parseInt(window.prompt(commentary + " ¿Cuánto gastaste en combustible?"));
    let expenseFood = parseInt(window.prompt("¿Cuánto gastaste en alimentación?"));
    let expenseHotel = parseInt(window.prompt("¿Cuánto gastaste en hospedaje?"));

    let totalExpenses = expenseFuel + expenseFood + expenseHotel;

    const hasOtherExpenses = window.confirm("¿Realizaste otros gastos durante el viaje?");
    if (hasOtherExpenses) {
        const numberOfOtherExpenses = parseInt(window.prompt("¿Cuántos gastos adicionales realizaste?"));

        for (let i = 1; i <= numberOfOtherExpenses; i++) {
            const otherExpense = parseInt(window.prompt("Ingresa el monto del gasto adicional #" + i));
            totalExpenses += otherExpense;
        }
    }

    finalMessage = userName + ", el total de gastos durante tu viaje " + tripType + " fue de $" + totalExpenses;

    if (totalExpenses < EXPENSE_LIMIT_LOW) {
        window.alert(finalMessage + " ¡Excelente! Mantuviste tus gastos al mínimo.");
    } else if (totalExpenses >= EXPENSE_LIMIT_LOW && totalExpenses <= EXPENSE_LIMIT_MEDIUM) {
        window.alert(finalMessage + ". Moderado. ¡Podrías ahorrar un poco más!");
    } else {
        window.alert(finalMessage + " ¡Atención! Tus gastos fueron muy elevados.");
    }

    repeatCalculation = window.confirm("¿Quieres calcular los gastos de otro viaje? (Aceptar = Sí / Cancelar = No)");
} while (repeatCalculation);

window.alert("¡Gracias por usar el sistema de control de gastos!");
