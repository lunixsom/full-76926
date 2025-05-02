/*
    ESTRUCTURA CÍCLICA REPETIR-PARA
*/

for (let i = 0; i < 10; i++) {
    console.log("iteración A:", i);
}

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }

    console.log("iteración B:", i);
}

for (let i = 10; i > 0; i--) {
    console.log("iteración C:", i);

    if (i === 5) {
        break;
    }
}