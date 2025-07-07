import { dniValidation } from "./dniValidation.js";
import { findClient } from "./baseClients.js";
import { counterPresence } from "./counterPresence.js";


// Primero crear el contador fuera para que no se resetee cada vez que se llama a la función (closure)
const attendanceCounter = counterPresence();

// Función que procesa todo y usa try/catch para manejar errores
export const processDni = (dni, successCallback) => {
  const successMsg = document.getElementById("msg-success");
  const invalidMsg = document.getElementById("msg-invalid");
  const notFoundMsg = document.getElementById("msg-notfound");

  // Ocultar todos los mensajes antes de mostrar el correspondiente
  successMsg.classList.add("hidden");
  invalidMsg.classList.add("hidden");
  notFoundMsg.classList.add("hidden");

  try {
    if (!dniValidation(dni)) {
      throw new Error("invalid");
    }

    const client = findClient(dni);
    if (!client) {
      throw new Error("notfound");
    }

    // Llamar al contador con el DNI para aumentar y obtener la cuenta
    const attendanceCount = attendanceCounter(dni.replace(/\./g, ""));
    successCallback(client, attendanceCount);


  } catch (error) {
    // Manejo de errores específicos
    if (error.message === "invalid") {
      invalidMsg.classList.remove("hidden");
    } else if (error.message === "notfound") {
      notFoundMsg.classList.remove("hidden");
    } else {
      console.error("Error inesperado:", error);
    }
  }
};

