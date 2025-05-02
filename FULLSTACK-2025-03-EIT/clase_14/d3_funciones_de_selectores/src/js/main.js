/*
    FUNCIONES DE SELECTORES
*/

// Selecciona el primer elemento que tenga el id "id-title" en el DOM
const titleH1 = document.querySelector("#id-title");
console.log(titleH1.innerText);

// Selecciona el primer elemento <h2> que encuentre en el DOM
const titleH2 = document.querySelector("h2");
console.log(titleH2.innerText);

// Selecciona el primer elemento la clase "description" en el DOM
const description = document.querySelector(".description");
console.log(description.innerText);

// Selecciona todos los elementos que tengan la clase "description" en el DOM
const descriptions = document.querySelectorAll(".description");
for (let i = 0; i < descriptions.length; i++) {
    const description = descriptions[i];
    console.log(i, description.innerText);
}

// Selecciona el elemento usando getElementById, que busca directamente por id
const titleH1WithGetElementById = document.getElementById("id-title");

// Modifica el texto del título <h1>
titleH1WithGetElementById.innerText = "Trabajando con funciones de selectores (script)";
console.log(titleH1WithGetElementById.innerText);

// Modifica el texto del <h2>
titleH2.innerText = "Este es un título H2 definido desde el script";
console.log(titleH2.innerText);