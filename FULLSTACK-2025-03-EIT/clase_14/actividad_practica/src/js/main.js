/*
    ACTIVIDAD PRACTICA - CLASE N°14
*/

const RECTANGLE_TYPE = "R";
const TRIANGLE_TYPE = "T";

const rectanglesContainer = document.querySelector("#rectangles-container");
const trianglesContainer = document.querySelector("#triangles-container");

const rectangles = [[5, 10],[8, 7],[12, 4]];
const triangles = [[6, 4],[8, 5],[10, 5]];

function calculateSurfaceArea(type, base, height) {
    surfaceArea = 0;

    if (type === RECTANGLE_TYPE) {
        surfaceArea = base * height;
    }

    if (type === TRIANGLE_TYPE) {
        surfaceArea = (base * height) / 2;
    }

    return surfaceArea;
}

function displayResults(type, values, container) {
    for (let i = 0; i < values.length; i++) {
        const base = values[i][0];
        const height = values[i][1];
        const surfaceArea = calculateSurfaceArea(type, base, height);
        const result = "<li>La superficie de una base de " + base + "cm por una altura de " + height + "cm es " + surfaceArea + "cm.</li>";
        container.innerHTML += result;
    }
}

displayResults(RECTANGLE_TYPE, rectangles, rectanglesContainer);
displayResults(TRIANGLE_TYPE, triangles, trianglesContainer);
