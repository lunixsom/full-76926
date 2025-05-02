/*
    ESTRUCTURA CONDICIONAL MULTIPLE
*/

const PARTIAL_AGE = 18;
const FULL_AGE = 21;

let age = Number.parseInt(window.prompt("Ingresa tu edad:"));

if (age < PARTIAL_AGE) {
    window.alert('Eres menor de edad');
} else if (age >= PARTIAL_AGE && age < FULL_AGE) {
    window.alert('Eres parcialmente mayor de edad');
} else if (age >= FULL_AGE) {
    window.alert('Eres totalmente mayor de edad');
} else {
    window.alert('Valor inválido');
}