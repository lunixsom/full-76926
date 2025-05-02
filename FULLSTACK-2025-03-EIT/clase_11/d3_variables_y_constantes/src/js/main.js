// COMENTARIOS
// Comentario de línea: se usa para escribir en una sola línea algo breve.
/*
  Comentario de bloque: se utiliza para escribir explicaciones más extensas.
  Es útil para describir secciones de código, o para desactivar temporalmente
  un bloque de código sin borrarlo.
*/


// VARIABLES:
let greeting;               // Declaración de una variable llamada 'greeting'
greeting = "Hola";          // Asignación del valor "Hola"
greeting = "Hola Mundo";    // Re-asignación del valor "Hola Mundo"
console.log(greeting);      // Muestra por la consola el valor actual de 'greeting'


// CONSTANTES:
const WELCOME = "Bienvenidos";  // Declaración de una constante llamada 'WELCOME' y asignación del valor "Bienvenidos"
console.log(greeting);          // Muestra por la consola el valor actual de 'WELCOME'

// La siguiente línea lanzará un error: "TypeError: Assignment to constant variable."
// WELCOME = "Bienvenidos de nuevo";

// Nota: Esto sucede porque no se puede cambiar el valor de una constante después de haber sido definida
