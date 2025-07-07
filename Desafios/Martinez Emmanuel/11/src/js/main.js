import { processDni } from "./modules/dniProcessor.js";
import {showMessageSuccess} from "./modules/menssageSuccess.js";

const btnProcess = document.getElementById("btn-process");
const inputDni = document.getElementById("id-dni");


// Evento para procesar el DNI al hacer clic en el botón
btnProcess.addEventListener("click", (e) => {
  e.preventDefault();
  const dni = inputDni.value.trim();
  if (dni !== "") {
    processDni(dni, showMessageSuccess);
  }
});


const form = document.querySelector(".asistance__form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita que la página recargue
  const dni = inputDni.value.trim();
  if (dni !== "") {
    processDni(dni, showMessageSuccess);
  }
});

