/*
    EJEMPLOS DE OPERADORES VARIOS

    - Operador de Concatenación (+): Une (concatena) cadenas de texto.
    - Operador de Incremento (++): Aumenta en 1 el valor de una variable numérica.
    - Operador de Decremento (--): Disminuye en 1 el valor de una variable numérica.
*/


// EJEMPLOS DE CONCATENACIÓN
let greeting = "Hola";
let firstName = "Juan";
let message = greeting + " " + firstName;
console.log(message);   // Devuelve: "Hola Juan"


// EJEMPLOS DE INCREMENTO
let a = 10;
let b = 20;
console.log(++a);       // Prefijo: primero incrementa, luego muestra 11
console.log(b++);       // Postfijo: muestra el valor 20, luego incrementa
console.log(b);         // Valor actual: 21


// EJEMPLOS DE DECREMENTO
let x = 50;
let y = 100;
console.log(--x);       // Prefijo: primero decrementa, luego muestra 49
console.log(y--);       // Postfijo: muestra el valor 100, luego decrementa
console.log(y);         // Valor actual: 99
