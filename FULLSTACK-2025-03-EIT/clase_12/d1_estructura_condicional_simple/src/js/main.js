/*
    ESTRUCTURA CONDICIONAL SIMPLE
*/

let a = 10;
let b = "50";
let isAvailable = true;

// Se cumple
if (a == 10) {
    console.log('a es igual que 10');
}

// No se cumple
if (b === 50) {
    console.log('b es estrictamente igual que 10 (compara el tipo de datos)');
}

// Se cumple
if (a < b) {
    console.log('a es menor que b');
}

// No se cumple
if (a > b) {
    console.log('a es mayor que b');
}

// Se cumple
if (isAvailable === true) {
    console.log('isAvailable es estrictamente igual que true (compara el tipo de datos)');
}