/*
    ESTRUCTURA SELECTIVA MULTIPLE
*/

const LEVEL_LANGUAGE_BEGINNER = 1;
const LEVEL_LANGUAGE_ELEMENTARY = 2;
const LEVEL_LANGUAGE_INTERMEDIATE = 3;
const LEVEL_LANGUAGE_ADVANCED = 4;
const LEVEL_LANGUAGE_NATIVE = 5;

let level = Number.parseInt(window.prompt("Ingresa tu nivel de ingles: (1, 2, 3, 4 o 5)"));
let message = 'Tu nivel de ingles es ';

switch (level) {
    case 1:
        message += "principiante";
        break;
    case 2:
        message += "elemental";
        break;
    case 3:
        message += "intermedio";
        break;
    case 4:
        message += "avanzado";
        break;
    case 5:
        message += "nativo";
        break;
    default:
        message = "Nivel inválido";
}

window.alert(message);