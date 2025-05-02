/*
    ESTRUCTURA CONDICIONAL ANIDADA
*/

const COUNTRY_ARGENTINA = "ARG";
const COUNTRY_COLOMBIA = "COL";
const COUNTRY_URUGUAY = "URU";
const COUNTRY_OTHER = "OTH";

let country = window.prompt("Ingresa tu país de origen (ARG, COL, URU, OTH):");
let message = 'Hablas otro idioma nativo';

if (country == COUNTRY_ARGENTINA || country == COUNTRY_COLOMBIA || country == COUNTRY_URUGUAY) {
    message = 'Tu idioma nativo es el español';

    let isBilingual = window.confirm("¿Hablas otro idioma? (Sí=Aceptar / No=Cancelar)");
    if (isBilingual) {
        message += " y además hablas un segundo idioma";
    }
}

window.alert(message);

