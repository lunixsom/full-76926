const montoMinimo = 100000;
const montoMaximo = 300000;
let otroViaje;

do {
    let nombre = prompt("Por favor, ingresa tu nombre:");
    let opcionInvalida = true;

    while (opcionInvalida) {
        let tipoDeViaje = prompt("¿Qué tipo de viaje realizaste?\n(Opciones: laboral / placer / familiar)");
        switch (tipoDeViaje) {
            case 'laboral':
                alert("¡Esperamos que tu viaje laboral haya sido productivo!");
                opcionInvalida = false
                break;
            case 'placer':
                alert("¡Nos alegra que hayas disfrutado tu viaje de placer!");
                opcionInvalida = false;
                break;
            case 'familiar':
                alert("¡Qué bueno que hayas compartido tiempo con tu familia!");
                opcionInvalida = false;
                break;    
            default:
                alert("Opcion invalida. Intentelo de nuevo.")
                break;
        }
    }

    let gastosCombustible = parseFloat(prompt("¿Cuánto gastaste en combustible?"));
    let gastosAlimentacion = parseFloat(prompt("¿Cuánto gastaste en alimentación?"));
    let gastosHospedaje = parseFloat(prompt("¿Cuánto gastaste en hospedaje?"));

    let gastosTotales = gastosCombustible + gastosAlimentacion + gastosHospedaje;

    let huboGastoAdicional = window.confirm("¿Realizaste otros gastos durante el viaje?")
    if(huboGastoAdicional){
        let cantidadDeGastosExtra = parseInt(prompt("¿Cuántos gastos adicionales realizaste?"))
        for (let i = 1; i <= cantidadDeGastosExtra; i++){
            let gastoExtra = parseFloat(prompt("Ingresa el monto del gasto adicional " + i));
            gastosTotales += gastoExtra
        }
    }

    let mensajeFinal = '';

    if(gastosTotales < montoMinimo) {
        mensajeFinal = ". ¡Excelente! Mantuviste tus gastos al mínimo."
    } else if (gastosTotales <= montoMaximo) {
        mensajeFinal = ". Moderado. ¡Podrías ahorrar un poco más!";
    }else{
        ". ¡Atención! Tus gastos fueron muy elevados.";
    };

    alert(nombre + ', el total de tus gastos fue de: $' + gastosTotales + mensajeFinal)

    otroViaje = window.confirm("¿Quieres calcular los gastos de otro viaje? (Aceptar = Sí / Cancelar = No)")

} while (otroViaje);

alert("¡Gracias por usar el sistema de control de gastos!");