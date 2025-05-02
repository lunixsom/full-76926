/*
    EJEMPLOS DE OPERADORES ARITMÉTICOS
*/

let a = 10;
let b = 3;
let c = "3";
let result;

result = (a < b);
console.log("¿a es menor que b?:", result);                     // Devuelve: false

result = (a <= b);
console.log("¿a es menor o igual que b?:", result);             // Devuelve: false

result = (a > b);
console.log("¿a es mayor que b?:", result);                     // Devuelve: true

result = (a >= b);
console.log("¿a es mayor o igual que b?:", result);             // Devuelve: true

result = (a == b);
console.log("¿a es igual que b?:", result);                     // Devuelve: false

result = (a != b);
console.log("¿a es diferente de b?:", result);                  // Devuelve: true

result = (b === c);
console.log("b es estrictamente igual que c?:", result);        // Devuelve: false

result = (b !== c);
console.log("b es estrictamente diferente que c?:", result);    // Devuelve: true
