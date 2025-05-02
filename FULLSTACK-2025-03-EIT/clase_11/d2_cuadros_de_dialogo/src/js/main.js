// Cuadro de diálogo de información
window.alert("Mensaje de información");

// Cuadro de diálogo de confirmación
let response = window.confirm("Mensaje de confirmación");
window.document.write(response); // Imprime el resultado en el HTML
console.log(response); // Muestra por consola la respuesta seleccionada

// Cuadro de diálogo de entrada de dato
let input = window.prompt("Mensaje de entrada");
window.document.write(input); // Imprime el resultado en el HTML
console.log(input); // Muestra por consola el dato ingresado

let uri = window.location;
console.log(uri); // Muestra por consola la URI actual

// Redireccionar a otra página web (Descomentar para probar)
// window.location = "https://www.educacionit.com/";