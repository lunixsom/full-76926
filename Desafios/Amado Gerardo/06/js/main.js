/*
    ACTIVIDAD PRACTICA - CLASE N°14 GERARDO AMADO
*/

const LOW_COST = 5000;
const HIGH_COST = 7500;

const BOX = "B";
const BAG = "G";
const PALLET = "P";

const QUOTE_CONTAINER = document.querySelector("#quotes-container");

const BOX_SHIPMENT = [[4, 0.35]];
const BAG_SHIPMENT = [[15, 0.65],[1, 10]];
const PALLET_SHIPMENT = [[1, 51],[46, 2.25],[30, 1.60]];

function calculateTotalWeight(qty,unitaryWeight) {
    const totalWeight = qty*unitaryWeight;
    return totalWeight;
}

function calculateCost(qty,totalWeight) {
    cost = 0;
    if (totalWeight <= 50 ) {
        cost = LOW_COST * totalWeight;
    }
    else {
        cost = HIGH_COST * totalWeight;
    }
    return cost;
}

function displayResults(pack, values, container) {
    for (let i = 0; i<values.length; i++) {
        const qty = values[i][0];
        const unitaryWeight = values[i][1];
        const totalWeight = calculateTotalWeight(qty, unitaryWeight);
        const cost = calculateCost(qty, calculateTotalWeight(qty, unitaryWeight));
        const result = "<li>El envío " + (i+1) + " es de tipo " + pack + ", pesa " + totalWeight + "kg y el costo del envío es de $"+cost+".</li>";
        container.innerHTML += result;
    }
}

displayResults(PALLET, PALLET_SHIPMENT, QUOTE_CONTAINER);
displayResults(BOX, BOX_SHIPMENT, QUOTE_CONTAINER);
displayResults(BAG, BAG_SHIPMENT, QUOTE_CONTAINER);

