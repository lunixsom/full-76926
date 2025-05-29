const resultContainer = document.getElementById('result_container');

const NORMAL_FEE=5000;
const EXTENDED_FEE=7500;
const TYPE_BOX="B";
const TYPE_PALLET="P";
const TYPE_BAG="G";


const shipments = [
    [TYPE_PALLET, 1,51],
    [TYPE_PALLET,46,2.25],
    [TYPE_PALLET,30,1.60],
    [TYPE_BOX, 15,0.65],
    [TYPE_BOX, 1,10],
    [TYPE_BAG,4,0.35],
];


function calculateTotalWeight (quantity,weight){
    return quantity * weight;
}

function calculateCost(TotalWeight){
    let result = 0;

    if(TotalWeight <=50) {
        result =TotalWeight * NORMAL_FEE;
    }else{
        result= TotalWeight * EXTENDED_FEE;
    }
    return result;
}
function displayResults(){
    for (let i = 0; i < shipments.length; i++)
        { const producto = shipments[i];
          const type = producto[0];
          const quantity = producto[1];
          const weight = producto[2];
          const totalWeight = calculateTotalWeight(quantity, weight);
          const totalcost = calculateCost(totalWeight);


          const result ="<li> El envío de " + type + " con un peso total de " + totalWeight + " kg, tiene un costo de $" + totalcost + "</li>"
          console.log(result)
            resultContainer.innerHTML += result;
        }
    }
    displayResults();