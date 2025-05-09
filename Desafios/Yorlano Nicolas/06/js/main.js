/*INSTRUCCIONES

Crear una lista (array) para almacenar sub-arrays con los siguientes datos:
Tipo de contenedor (Caja, Bolsa o Pallet).
Cantidad de productos.
Peso unitario del producto en kilogramos.
Crear constantes para las tarifas de envío:
5000 (Tarifa normal, para envíos cuyo peso total sea igual o menor a 50 kg).
7500 (Tarifa extendida, para envíos cuyo peso total sea mayor a 50 kg).
Crear constantes para los códigos de tipo de contenedor:
"B" para cajas (Box).
"G" para bolsas (Bag).
"P" para pallets (Pallet).
Crear una función calculateTotalWeight que reciba la amount de productos y el peso unitario para calcular el peso total del envío.
Crear una función calculateCost que reciba el tipo de contenedor y el peso total calculado para determinar el costo total del envío de acuerdo con la tarifa aplicable (normal o extendida).
Crear un contenedor en el HTML de tipo <ul> con el id "result-container" donde se mostrarán los resultados finales por cada envío que incluya el peso total y el costo pertinente.
Crear una función displayResults para mostrar los resultados en el contenedor.
Llamar a la función displayResults una vez.
*/

const  shipments = [
    ["P", 1, 51],
    ["P", 46, 2.25],
    ["P", 30, 1.60],
    ["B", 15, 0.65],
    ["B", 1, 10],
    ["G", 4, 0.35]
]

const TARIFA_NORMAL = 5000, TARIFA_EXTENDIDA = 7500;

const PALLET = "P", BAG = "G", BOX = "B";

const shipment_container = document.querySelector("#result-container");

function calculateTotalWeight(amount, unit_weight) {
    // Recibe la cantidad de productos y el peso unitario para calcular el peso total del envío.
    return amount * unit_weight;
}

function calculateCost(total_weight) {
    // Recibe el tipo de contenedor y el peso total calculado para determinar el costo total del envío de acuerdo con la tarifa aplicable (normal o extendida).
    if (total_weight <= 50) {
        return total_weight * TARIFA_NORMAL;
    }
    else if (total_weight > 50) {
        return total_weight * TARIFA_EXTENDIDA;
    }
}

function displayResults (shipments) {
    for (let i = 0; i < shipments.length; i++) {
        const amount = shipments[i][1];
        const unit_weight = shipments[i][2];
        const total_weight = calculateTotalWeight(amount, unit_weight);
        const total_cost = calculateCost(total_weight);
        const result = "<li> El envío " + [i+1] +  " es de tipo " + shipments[i][0] + ", pesa " + total_weight + "kg y el costo del envío es de $" + total_cost + ".</li>"
        shipment_container.innerHTML += result;
    }
}

displayResults(shipments);


