
// Constantes
const container = document.querySelector("#result-container");
const NORMAL_TARIFF = 5000; // Para peso menor o igual 50kg
const EXTENDED_TARIFF = 7500; // Para peso mayor o igual a 50kg

const BOX_TYPE = "B"; // Box - Cajas
const BAG_TYPE = "G"; // Bag - Bolsas
const PALLET_TYPE = "P"; // Pallet - Pallets




// Datos
const productsContainer = [
    ["Pallet", 1, 51],
    ["Pallet", 46, 2.25],
    ["Pallet", 30, 1.60],
    ["Caja", 15, 0.65],
    ["Caja", 1, 10],
    ["Bolsa", 4, 0.35],
]


// Funciones
function calculateTotalWeigth(quantity, unitWeight) {
    return quantity * unitWeight;
}

function calculateCost(type, totalWeigth) {
    let total = 0;
    if (totalWeigth <= 50){
        total = totalWeigth * NORMAL_TARIFF;
    }else {
        total = totalWeigth * EXTENDED_TARIFF;
    }

    return total;
}

// Función para convertir código a nombre
function getContainerName(code) {
    switch (code) {
      case BOX: return "Caja";
      case BAG: return "Bolsa";
      case PALLET: return "Pallet";
      default: return "Desconocido";
    }
  }

// Función para convertir código a nombre
function getContainerName(name) {
    switch (name) {
      case "Caja": return BOX_TYPE;
      case "Bolsa": return BAG_TYPE;
      case "Pallet": return PALLET_TYPE;
      default: return "Desconocido";
    }
  }

function displayResults(productsContainer) {
    for (let i = 0; i < productsContainer.length; i++) {
        const products = productsContainer[i];
        const type = getContainerName(products[0]);
        const quantity = products[1];
        const unitWeight = products[2];

        const totalWeigth = calculateTotalWeigth(quantity, unitWeight);
        const totalCost = calculateCost(type, totalWeigth);

        // Mostramos en pantalla
        const element = "<li>El envío " + (i + 1) + " es de tipo " + type  + ", pesa " + totalWeigth + "kg" + " y el costo del envío es de $" + totalCost + ".</li>";
        container.innerHTML += element;
    }
}


//--------------------------------------------
// Ejecución
displayResults(productsContainer);


//---------------------------------------------