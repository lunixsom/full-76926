/*
    ESTRUCTURA CONDICIONAL DOBLE
*/

let a = 10;
let isAvailable = true;

if (a == 10 && isAvailable) {
    console.log('CONDICIÓN 1: a es igual que 10 y isAvailable es true');
} else {
    console.log('CONDICIÓN 1: a no es igual que 10 ó/y isAvailable no es true');
}

if (a <= 10 && !isAvailable) {
    console.log('CONDICIÓN 2: a es igual o menor que 10 y isAvailable es false');
} else {
    console.log('CONDICIÓN 2: a no es igual o menor que 10 ó/y isAvailable no es false');
}

if (a > 50 || a < 100) {
    console.log('CONDICIÓN 3: a es mayor que 50 ó a es menor que 100');
} else {
    console.log('CONDICIÓN 3: ni a es mayor que 50 ni a es menor que 100');
}