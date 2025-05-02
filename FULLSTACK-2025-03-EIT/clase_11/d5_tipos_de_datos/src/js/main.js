/*
    EJEMPLOS DE TIPOS DE DATOS.

    Tipos de datos en JavaScript:
        - number
        - string
        - boolean
        - undefined
        - null

    El operador typeof en JavaScript devuelve el tipo de dato de un valor.
*/

// Tipo: number (número)
let a = 10;
console.log("Valor de a: ", a);
console.log("Tipo de dato de a: ", typeof (a));     // Devuelve: "number"

// Tipo: string (cadena de texto)
let c = "Hola 32154 #$=";
console.log("Valor de c: ", c);
console.log("Tipo de dato de c: ", typeof (c));     // Devuelve: "string"

// Tipo: boolean (true o false)
let d = false; // Recordar que true es 1 y false es 0
console.log("Valor de d: ", d);
console.log("Tipo de dato de d: ", typeof (d));     // Devuelve: "boolean"

// Tipo: null (valor nulo)
let e = null;
console.log("Valor de e: ", e);
console.log("Tipo de dato de e: ", typeof (e));     // Devuelve: "object" (sí, aunque sea null)

// Tipo: undefined (no inicializada)
let b;
console.log("Valor de b: ", b);
console.log("Tipo de dato de b: ", typeof (b));     // Devuelve: "undefined"

// Tipo: NaN (resultado de una operación inválida)
let f = 10 - "x2";
console.log("Valor de f: ", f);
console.log("Tipo de dato de f: ", typeof (f));     // Devuelve: "number" (sí, ¡aunque sea NaN!)