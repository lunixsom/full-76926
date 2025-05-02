/*
    ARRAY MATRICIAL
*/

// Array Matricial (Matriz 3x2)
const matrix = [[21, 15], [77, 50], [20, 55]];

// Mostrar contenido del array en una tabla por la consola
console.table(matrix);

// Acceder a un valor por su índice y sub-índice en el array.
// Esta accediendo al segundo sub-elemento del primer elemento
let element = matrix[0][1];
console.log("1er Elemento[2do Sub-elemento] [índice 0-sub1]:", element);

// Reasignar valor por su índice y sub-índice en el array
matrix[1][1] = 100; // Modifica el valor de 50 por un 100
console.log("2do Elemento[2do Sub-elemento] [índice 1-sub1]", matrix[1][1]);


// Nota: Para ver el resultado, abre el archivo con LiveServer en VSCode,
// luego, en el navegador, presiona la tecla F12 para abrir las herramientas de desarrollo
// y presiona F5 para actualizar la página.