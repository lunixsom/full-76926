/*
    EJEMPLOS DE OPERADORES LÓGICOS

        - Operador AND (&&): Devuelve true solo si ambas condiciones son verdaderas.
        - Operador OR (||): Devuelve true si al menos una de las condiciones es verdadera.
        - Operador NOT (!): Invierte el valor lógico de una condición. Si es true,
        lo convierte en false; y viceversa.
*/

let a = true;
let b = false;
let c = 5;
let d = 10;
let result;


// EJEMPLOS CON VALORES BOOLEANOS
result = a && b;
console.log("¿a Y b (AND) es verdadero?:", result);     // Devuelve: false

result = a || b;
console.log("¿a Ó b (OR) es verdadero?:", result);      // Devuelve: true

result = !a;
console.log("¿NO a (NOT) es verdadero?:", result);      // Devuelve: false

result = !b;
console.log("¿NO b (NOT) es verdadero?:", result);      // Devuelve: true

result = (a || b) && !a;
console.log("¿(a O b) Y NO a es verdadero?:", result);  // Devuelve: false


// EJEMPLOS CON VALORES NUMÉRICOS
result = c > 20 || d == 10;
console.log("¿c es mayor que 20 Ó d es igual que 10?:", result);    // Devuelve: true

result = c == 7 || d == 15;
console.log("¿c es igual que 7 Ó d es igual que 15?:", result);     // Devuelve: false

result = c > 3 && d == 10;
console.log("¿c es mayor que 3 Y d es igual que 10?:", result);     // Devuelve: true

result = c > 3 && d < 5;
console.log("¿c es mayor que 3 Y d es menor que 5?:", result);      // Devuelve: false

result = (c == 5);
console.log("c es igual a 5:", result);                         // Devuelve: true

result = !(c == 5);
console.log("niego que c es igual a 5:", result);               // Devuelve: false