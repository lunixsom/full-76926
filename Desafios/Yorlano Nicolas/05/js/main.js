/*
INSTRUCCIONES

Declarar dos constantes que representen los límites de gastos: 100000 y 300000.
Pedir al usuario su nombre mediante window.prompt.
Pedir el tipo de viaje realizado, el cual puede ser: "laboral", "placer" o "familiar".
Según el tipo de viaje, mostrar un mensaje personalizado utilizando switch.
Solicitar al usuario los gastos principales del viaje: combustible, alimentación y hospedaje.
Preguntar si realizó otros gastos adicionales mediante window.confirm.
Si la respuesta es afirmativa, solicitar cuántos gastos adicionales se realizaron.
Usar un bucle for para ingresar cada uno y sumarlos al total.
Calcular el total de gastos y mostrar un mensaje personalizado según el monto:
Menor a 100000: “¡Excelente! Mantuviste tus gastos al mínimo.”
Entre 100000 y 300000: “Moderado. ¡Podrías ahorrar un poco más!”
Mayor a 300000: “¡Atención! Tus gastos fueron muy elevados.”
Al final, preguntar al usuario si desea calcular los gastos de otro viaje. Si responde afirmativamente, el programa debe repetir todo el proceso (do...while).
Finalizar con un mensaje de despedida.
*/

const LIMITE_INICIAL = 100000, LIMITE_FINAL = 300000;

let nombre_usuario = prompt("Por favor, ingresa tu nombre:");
let otro_viaje = true;

while (otro_viaje){
    let tipo_viaje = prompt("¿Qué tipo de viaje realizaste? (Opciones: laboral / placer / familiar)");

    switch (tipo_viaje) {
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
            alert("No ingreso el tipo de viaje correctamente");
            throw new Error("Tipo de viaje inválido"); 
    }
    

    let combustible = Number.parseFloat(prompt("¿Cuánto gastaste en combustible?"));
    let alimentacion = Number.parseFloat(prompt("¿Cuánto gastaste en alimentación?"));
    let hospedaje = Number.parseFloat(prompt("¿Cuánto gastaste en hospedaje?"));
    
    let gastos_opcionales = confirm("¿Realizaste otros gastos durante el viaje?");
    
    let opcionales = 0;
    if(gastos_opcionales) {
        let cantidad_opcionales = Number.parseInt(prompt("¿Cuántos gastos adicionales realizaste?"));
    
        let aux
        for (let i = 0; i < cantidad_opcionales; i++) {
            aux = Number.parseFloat(prompt(`Ingresa el monto del gasto adicional #${i+1}`));
            opcionales += aux;
        }
    }

    let total = opcionales + hospedaje + alimentacion + combustible;
    alert(`${nombre_usuario}, el total de gastos durante tu viaje de tipo ${tipo_viaje} fue de: $${total}`);
    
    if(total < LIMITE_INICIAL) {
        alert("¡Excelente! Mantuviste tus gastos al mínimo.");
    }
    else if (total >= LIMITE_INICIAL && total <= LIMITE_FINAL){
        alert("Moderado. ¡Podrías ahorrar un poco más!");
    }
    else if (total > LIMITE_FINAL) {
        alert("¡Atención! Tus gastos fueron muy elevados.");
    }
    
    otro_viaje = confirm("¿Quieres calcular los gastos de otro viaje? (Aceptar = Sí / Cancelar = No)");   
}

alert("¡Gracias por usar el sistema de control de gastos!");
