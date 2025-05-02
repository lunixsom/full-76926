/*
    EJEMPLOS DE CONVERSIONES DE DATOS.

    - convert (convertir): significa cambiar de un tipo de dato a otro, y es un término más genérico.
    - parse (parsear): significa 'analizar' el contenido y 'extraer' un valor útil de otro tipo.
    - cast (forzar): significa cambiar forzadamente de un tipo de dato a otro.

    El método .toString() en JavaScript convierte un valor u objeto a una cadena de texto,
    proporcionando una representación legible de tipos como números, booleanos, objetos y arrays.
*/


// EJEMPLOS DE PARSE
console.log(Number.parseInt("10.5"));       // 10       (convierte string a entero, truncando)
console.log(Number.parseInt("20px"));       // 20       (toma hasta que encuentra "p")
console.log(Number.parseInt("abc"));        // NaN      (no hay número al principio)
console.log(Number.parseInt("  15"));       // 15       (ignora espacios al inicio)
console.log(Number.parseInt("50e3"));       // 50       (interpreta 'e' como un carácter no numérico)
console.log(Number.parseInt(true));         // NaN      (interpreta 'true' como algo no numérico)

console.log(Number.parseFloat("10.5"));     // 10.5     (convierte string a decimal)
console.log(Number.parseFloat("20.99px"));  // 20.99    (toma la parte decimal hasta "px")
console.log(Number.parseFloat("abc"));      // NaN      (no puede convertir "abc")
console.log(Number.parseFloat("10.1.2"));   // 10.1     (detiene al encontrar el segundo punto)
console.log(Number.parseFloat("  15.77"));  // 15.77    (ignora los espacios al inicio)


// EJEMPLOS DE CAST
console.log(Number("123"));                 // 123      (string a número)
console.log(Number("123.45"));              // 123.45   (string decimal a número)
console.log(Number("abc"));                 // NaN      (string no numérico, falla)
console.log(Number(true));                  // 1        (booleano a número)
console.log(Number(false));                 // 0        (booleano a número)

console.log(String(123));                   // "123"    (número a string)
console.log(String(123.45));                // "123.45" (decimal a string)
console.log(String(true));                  // "true"   (booleano a string)

console.log(Boolean(1));                    // true     (número a booleano)
console.log(Boolean(0));                    // false    (número a booleano)
console.log(Boolean("hello"));              // true     (cadena no vacía a booleano)
console.log(Boolean(""))                    // false    (cadena vacía a booleano)
console.log(Boolean(null));                 // false    (null a booleano)


// EJEMPLOS DE MÉTODO toString()
let num = 123;
console.log(num.toString());    // Devuelve: "123"

let bool = true;
console.log(bool.toString());   // Devuelve: "true"