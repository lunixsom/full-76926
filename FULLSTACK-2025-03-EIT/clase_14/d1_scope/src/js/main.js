/*
    SCOPE (ALCANCE)
*/

// Variables globales: son accesibles desde cualquier parte del código
let firstName = "Juan";
const AGE = 18;
const NUMBER = 1;

if (true) {
    // Dentro del bloque 'if', se puede acceder a las variables globales
     console.log("Accede desde el interior del bloque 'if':", firstName);

    // Declaración de una constante local dentro del bloque 'if'
    const MESSAGE = "es mayor de edad."

    console.log(firstName + " tiene " + AGE + " años y " + MESSAGE);
}

for (let i = 0; i < 3; i++) {
    // Declaración de una variable local dentro del bloque 'for' y acceso a constante global NUMBER
    let elementNumber = i+NUMBER;

    // Dentro del bloque 'for', se puede acceder a las variables globales
    console.log("Accede desde el interior del bloque 'for'. Elemento N°:", elementNumber);
}

console.log(firstName);         // Accede a la variable global
// console.log(MESSAGE);        // Error: MESSAGE no está definida fuera del bloque 'if'
// console.log(elementNumber);  // Error: elementNumber no está definida fuera del bloque 'for'
