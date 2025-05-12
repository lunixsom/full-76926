
const BOX_TYPE= "B";
const BAG_TYPE= "G";
const PALLET_TYPE= "P";

const TARIFA_NORMAL= 5000;
const TARIFA_EXTENDIDA= 7000;

const resultContainer= document.querySelector("#result-container");

const Envios= [["P", 1, 51],["P", 46, 2.25],["P", 30, 1.60],["B", 15, 9.65],["B", 1, 10],["G", 4, 0.35]];

function calculateTotalWeight(unit, weight) {
    
            totalWeight= (unit*weight);
           
            return totalWeight;
                }
           
        

function calculateCost(type, totalWeight) {
    deliveryCost= 0;
    if(totalWeight <= 50) {
        deliveryCost= (totalWeight * TARIFA_NORMAL);
    }
    else if(totalWeight > 50) {
        deliveryCost= (totalWeight * TARIFA_EXTENDIDA);
    }
    return deliveryCost;

    }
    
    function displayResults(array11) {
        for(let i= 0; i< array11.length; i++){
            const Envios2= array11[i];
            const type= Envios2[0];
            const unit= Envios2[1];
            const weight= Envios2[2];
            const totalWeight= calculateTotalWeight(unit, weight);
            const deliveryCost= calculateCost(type,totalWeight);
            const result= "<li>El envio "+[i+1]+ " es de tipo "+ type + ", pesa "+ totalWeight + " kg y el costo del envío es de $ "+ deliveryCost +".</li>";
            resultContainer.innerHTML += result;
        }
    }
    displayResults(Envios);

