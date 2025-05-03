const LIMITE_INFERIOR = 100000;
const LIMITE_SUPERIOR = 300000;

let nombre = prompt("Por favor, ingresa tu nombre:");
let programa_corriendo = false;
let tipo_viaje
let message1



do {

    
    while (!tipo_viaje){
    
        tipo_viaje = String(prompt("¿Qué tipo de viaje realizaste? (Opciones: laboral / placer / familiar)"));
    
    switch (tipo_viaje) {
        case "laboral":
            message1 = "¡Esperamos que tu viaje laboral haya sido productivo!";
            break;
        case "placer":
            message1 = "¡Nos alegra que hayas disfrutado tu viaje de placer!";
            break;
        case "familiar":
            message1 = "¡Qué bueno que hayas compartido tiempo con tu familia!";
            break;
        default:
            message1 = "Tipo de Viaje Inválido (Opciones: laboral / placer / familiar)";
            tipo_viaje=""
    }
}

alert(message1);


let gasto_combustible = Number.parseFloat(prompt("¿Cuánto gastaste en combustible?"));

let gasto_alimentacion = Number.parseFloat(prompt("¿Cuánto gastaste en alimentación?"));

let gasto_hospedaje = Number.parseFloat(prompt("¿Cuánto gastaste en hospedaje?"));

let gastos_adicionales = confirm("¿Realizaste otros gastos durante el viaje?");

let otros_gastos=0;
if (gastos_adicionales == true) {
    let cant_gastos = Number.parseInt(prompt("¿Cuántos gastos adicionales realizaste?"));
    for (let i = 0; i < cant_gastos; i++) {
        let gasto = Number.parseFloat(prompt ("Ingresa el monto del gasto adicional #"+(i+1)))
    otros_gastos += gasto;
    }
};

let total_gastos = Number.parseFloat(gasto_combustible+gasto_alimentacion+gasto_hospedaje+otros_gastos);

alert(nombre+", el total de gastos durante tu viaje "+tipo_viaje+" fue de $"+total_gastos);

if (total_gastos<LIMITE_INFERIOR) { alert(" ¡Excelente! Mantuviste tus gastos al mínimo.") }
    else if (total_gastos>=LIMITE_INFERIOR&&total_gastos<=LIMITE_SUPERIOR) { alert("Moderado. ¡Podrías ahorrar un poco más!")}
    else {alert("¡Atención! Tus gastos fueron muy elevados.") }

programa_corriendo = confirm("¿Quieres calcular los gastos de otro viaje? (Aceptar = Sí / Cancelar = No)")

if (programa_corriendo){ tipo_viaje="" }
/* if (mas_viajes == "Sí" || mas_viajes == "si" || mas_viajes == "SI"|| mas_viajes == "Si") {
    programa_corriendo=true */
/* } */
/* else if (mas_viajes == "No" || mas_viajes == "no" || mas_viajes == "NO") {
    programa_corriendo=false} */
} while (programa_corriendo==true)

alert("¡Gracias por usar el sistema de control de gastos!")
