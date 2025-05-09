const normalFee = 5000;
const extendedFee = 7500;

const BOX_TYPE = "B";
const BAG_TYPE = "G";
const PALLET_TYPE = "P";

const resultContainer = document.querySelector("#result-container")

function verifyFee(totalWeight){
    let fee;
    if(totalWeight <= 50){
        fee = normalFee
    } else{
        fee = extendedFee
    };
    return(fee)
};

const prodList = [ 
    ["P", 1, 51],
    ["P", 46, 2.25],
    ["P", 30, 1.6],
    ["B", 15, 0.65],
    ["B", 1, 10],
    ["G", 4, 0.35]
];

function calculateTotalWeight(prodQty, prodWeight) {
    let totalWeight = prodQty * prodWeight;
    return totalWeight;
}

function calculateCost(containerType, totalWeight) {
    let totalCost = verifyFee(totalWeight) * totalWeight;
    return totalCost;
};

function displayResults(prodList, container) {
    for (let i = 0; i < prodList.length; i++) {
        let type = prodList[i][0]
        let totalWeight = calculateTotalWeight(prodList[i][1], prodList[i][2])
        let totalCost = calculateCost(totalWeight)
        const result = "<li>El envio " + (i + 1) + " es de tipo " + type + ", pesa " + totalWeight + "kg y el costo de envio es $" + totalCost +  "</li>";
        container.innerHTML += result
    }
}

displayResults(prodList, resultContainer)