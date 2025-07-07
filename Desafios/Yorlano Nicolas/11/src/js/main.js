/*
INSTRUCCIONES

Validar el campo de DNI utilizando una expresión regular. El formato debe ser ##.###.### y solo deben ser válidos los valores desde 5.000.000 hasta 99.999.999.
Detectar si el DNI ingresado pertenece a un cliente registrado (utilizar el evento click).
Si el DNI es válido y pertenece a la base de clientes: Mostrar el mensaje: "Hola Lucía, esta es tu asistencia número N". (emplear un callback para mostrar el mensaje de bienvenida). Si el DNI es inválido o no pertenece a la base: Mostrar el mensaje de error correspondiente (Aplicar try/catch y throw para manejar estas excepciones).
Implementar un closure para contar las asistencias de manera persistente cada vez que se registra un cliente.
Aplicar la metodología BEM para los nombres de clases en el HTML y SCSS.
Utilizar modificadores --success y --error para los definir los estilos de los mensajes.
Agregar y quitar clases dinámicamente desde JavaScript usando classList.add() y classList.remove().

*/


// Base de datos simulada
const clients = [
    { id: 1, name: "Lucía Medina", dni: "25.643.820" },
    { id: 2, name: "Martín Maldonado", dni: "31.278.914" },
    { id: 3, name: "Martina Acosta", dni: "40.385.720" },
    { id: 4, name: "Julián Domínguez", dni: "55.942.106" },
    { id: 5, name: "Lorena Morales", dni: "5.643.820" },
];

// Closure para contar asistencias por cliente
const createAttendanceCounter = () => {
    const attendance = {};  
    return function (dni) {
        const current = attendance[dni] || 0;  
        const next = current + 1;
        attendance[dni] = next;  
        return next;
    };
}

const countAttendance = createAttendanceCounter();

document.addEventListener("DOMContentLoaded", () => {
    const dniInput = document.getElementById("dni");
    const submitBtn = document.querySelector(".form__submit");
    const message = document.querySelector(".form__message");

    const dniRegex = /^\d{1,2}\.\d{3}\.\d{3}$/;

    function isValidDNI(dni) {
        // Validacion de que el DNI sea el formato indicado
        if (!dniRegex.test(dni)) {
            throw new Error("Debes ingresar un DNI válido (##.###.###).");
        }

        // Validacion de que el DNI este en el rango indicado
        const dniNumber = parseInt(dni.replace(/\./g, ""), 10);
        if (dniNumber < 5000000 || dniNumber > 99999999) {
            throw new Error("El número de DNI debe estar entre 5.000.000 y 99.999.999.");
        }
    }

    function findClientByDNI(dni) {
        return clients.find(client => client.dni === dni);
    }

    function showWelcome(client, count) {
        const firstName = client.name.split(" ")[0];
        message.textContent = `Hola ${firstName}, esta es tu asistencia ${count}.`;
        message.classList.remove("form__message--error");
        message.classList.add("form__message--success");
    }
    
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();

        try {
            const dni = dniInput.value.trim();

            isValidDNI(dni);

            const client = findClientByDNI(dni);
            if (!client) {
                throw new Error("El DNI ingresado no pertenece a un cliente registrado.");
            }

            const count = countAttendance(dni);
            showWelcome(client, count);

        } catch (error) {
            message.textContent = error.message;
            message.classList.remove("form__message--success");
            message.classList.add("form__message--error");
        }
    });
}); 