/*
    MANEJO DE FECHAS
*/

let currentDate = new Date();
let specificDate = new Date("2023/01/20 17:30");

console.log("Fecha actual:", currentDate);

console.log("Día actual:", currentDate.getDate());
console.log("Mes actual:", (currentDate.getMonth() + 1));
console.log("Año actual:", currentDate.getFullYear());
console.log("Hora actual:", currentDate.getHours());
console.log("Minuto actual:", currentDate.getMinutes());

console.log("Fecha y hora actual en string:", specificDate.toLocaleString());
console.log("Solo fecha actual en string:", specificDate.toLocaleDateString());
console.log("Solo hora actual en string:", specificDate.toLocaleTimeString());


// Nota: Para ver el resultado, abre el archivo con LiveServer en VSCode,
// luego, en el navegador, presiona la tecla F12 para abrir las herramientas de desarrollo
// y presiona F5 para actualizar la página.