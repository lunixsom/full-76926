const BOX_TYPE = "B";
const BAG_TYPE = "G";
const PALLET_TYPE = "P";

const NORMAL_RATE = 5000;
const EXTENDED_RATE = 7500;

const resultContainer = document.querySelector("#result-container");

const shipments = [
    [PALLET_TYPE, 1, 51],
    [PALLET_TYPE, 46, 2.25],
    [PALLET_TYPE, 30, 1.6],
    [BOX_TYPE, 15, 0.65],
    [BOX_TYPE, 1, 10],
    [BAG_TYPE, 4, 0.35]
];

function calculateTotalWeight(quantity, unitWeight) {
    return quantity * unitWeight;
}

function calculatarifaxkilo(totalWeight) {
    return totalWeight > 50 ? EXTENDED_RATE : NORMAL_RATE;
}

function calculateCost(totalWeight) {
    const rate = calculatarifaxkilo(totalWeight);
    return totalWeight * rate;
}

function displayResults() {
    for (let i = 0; i < shipments.length; i++) {
        const [type, quantity, unitWeight] = shipments[i];
        const totalWeight = calculateTotalWeight(quantity, unitWeight);
        const cost = calculateCost(totalWeight);
        const result = `<li>El envío ${i + 1} es de tipo ${type}, pesa ${totalWeight.toFixed(2)}kg y el costo del envío es de $${cost.toLocaleString()}.</li>`;
        resultContainer.innerHTML += result;
    }
}

displayResults();



