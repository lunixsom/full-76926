/*
    RECORRIDO DE ARRAYS
*/

// Array Unidimensional
const colors = ["Blanco", "Verde", "Rojo"];

// Obtener la longitud del array 'colors'
const colorsLength = colors.length;
console.log("Longitud del array (colors):", colorsLength);

// Iterar sobre el array 'colors' y mostrar cada elemento con su índice
for (let i = 0; i < colorsLength; i++) {
    console.log("Array colors (índice:" + i + "):", colors[i]);
}

// Array Bidimensional
const colorsWithRating = [
    ["Blanco", 7],
    ["Verde"],
    ["Rojo", 10, "es el más popular"],
    ["Negro", 9]
];

// Obtener la longitud del array 'colorsWithRating'
const colorsWithRatingLength = colorsWithRating.length;
console.log("Longitud del array (colorsWithRating):", colorsWithRatingLength);

// Iterar sobre el array 'colorsWithRating' y mostrar cada elemento con su índice
for (let i = 0; i < colorsWithRatingLength; i++) {
    console.log("Array colorsWithRating (índice:" + i + "):", colorsWithRating[i]);

    // Obtener la longitud de cada sub-array dentro de 'colorsWithRating'
    const colorsWithRatingSubLength = colorsWithRating[i].length;

    // Iterar sobre el sub-array dentro de 'colorsWithRating' y mostrar cada sub-elemento
    for (let j = 0; j < colorsWithRatingSubLength; j++) {
        console.log("sub-índice:" + j + "):", colorsWithRating[i][j]);
    }
}
