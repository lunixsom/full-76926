/*
    ARRAY UNIDIMENSIONAL
*/

// Array Unidimensional (también conocido como Vector)
const countries = ["Argentina", "Chile", "Colombia", "Uruguay", "Perú"];    // Esto es mutable (puede modificarse)
const NUMBER = 5;                                                           // Esto es inmutable (no puede modificarse)

// Mostrar contenido del array en una tabla por la consola
console.table(countries);

// Acceder a un valor por su índice en el array
let element = countries[1];
console.log("2do Elemento [índice 1]:", element);

// Reasignar valor por su índice en el array
countries[1] = "Paraguay"; // Cambia el valor en el índice 1 de 'Chile' a 'Paraguay'
console.log("2do Elemento [índice 1]:", countries[1]);


// Nota: Para ver el resultado, abre el archivo con LiveServer en VSCode,
// luego, en el navegador, presiona la tecla F12 para abrir las herramientas de desarrollo
// y presiona F5 para actualizar la página.