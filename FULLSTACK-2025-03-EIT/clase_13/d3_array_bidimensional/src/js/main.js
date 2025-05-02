/*
    ARRAY BIDIMENSIONAL
*/

// Array Bidimensional
const countriesWithPopulation = [
    ["Argentina", 47000000],
    ["Chile", 19000000],
    ["Perú", 28300000, "descripción: Es un ..."]
];

// Mostrar contenido del array en una tabla por la consola
console.table(countriesWithPopulation);

// Acceder a un valor por su índice y sub-índice en el array.
// Esta accediendo al primer sub-elemento del tercer elemento
let element = countriesWithPopulation[2][0];
console.log("3er Elemento[1er Sub-elemento] [índice 2-sub0]:", element);

// Reasignar valor por su índice y sub-índice en el array
countriesWithPopulation[1][1] = 200000000; // Modifica el valor de la población de Chile
console.log("2do Elemento[2do Sub-elemento] [índice 1-sub1]", countriesWithPopulation[1][1]);


// Nota: Para ver el resultado, abre el archivo con LiveServer en VSCode,
// luego, en el navegador, presiona la tecla F12 para abrir las herramientas de desarrollo
// y presiona F5 para actualizar la página.