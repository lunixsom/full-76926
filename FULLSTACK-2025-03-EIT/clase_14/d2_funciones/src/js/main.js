/*
    FUNCIONES
*/

// 1. Declaración y definición de una función sin retorno y sin parámetros
function showMessage() {
    console.log("Esta es una función sin retorno y sin parámetros.");
}
showMessage();  // Ejecuta la función

// 2. Declaración y definición de una función sin retorno y con un parámetro
function greeting(firstName) {
    console.log("¡Hola, " + firstName + "!");
}
greeting("Juan");  // Ejecuta la función

// 3. Declaración y definición de una función con retorno y sin parámetros
function calculate() {
    return ((3 * 2) + 10) / 2;
}
const calculationResult = calculate(); // Ejecuta la función y obtiene el resultado del cálculo
console.log(calculationResult);


// 4. Declaración y definición de una función con retorno y con dos parámetros
function subtract(a, b) {
    return a - b;
}
const subtractionResult = subtract(10, 3); // Ejecuta la función y obtiene el resultado de la resta
console.log(subtractionResult);