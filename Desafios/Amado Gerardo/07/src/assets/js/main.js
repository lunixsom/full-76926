const PENDING = "PENDING";
const CANCELLED = "CANCELLED";
const CONFIRMED = "CONFIRMED";

const STANDARD = "standard";
const DELUXE = "deluxe";
const SUITE = "suite";



const reservations = [
    ["Juan A. Perez", STANDARD, 101, "10/01/2024", 28444777, PENDING, false],
    ["Anthony Thomas", DELUXE, 102, "15/01/2024", 50788955,CONFIRMED, true],
    ["Lorena Medina", STANDARD, 103, "20/01/2024", 74111000,CANCELLED,false],
    ["Patricia Fuentes", SUITE, 105,"25/01/2024",9258258,CONFIRMED,false],
    ["Javier G. Torres", STANDARD, 106, "25/01/2024",75444888,CONFIRMED,false],
    ["Max Power", SUITE, 108,"15/01/2024",28555888,CANCELLED,true],
    ["Marian Sans", DELUXE,107,"12/01/2024", 32588255,CANCELLED,false],
    ["Clara Ponce", DELUXE,109,"18/02/2024",60155000,CONFIRMED,false],
    ["Carla Blanco", STANDARD,100,"05/03/2024", 40177070,PENDING,true]
];

const displayCounters = (pending, cancelled, confirmed) => {
    const counters = document.createElement("ul");
    counters.innerHTML += `<li><strong>Pendientes</strong>: ${pending}</li>`;
    counters.innerHTML += `<li><strong>Canceladas</strong>: ${cancelled}</li>`;
    counters.innerHTML += `<li><strong>Confirmadas</strong>: ${confirmed}</li>`;
    counters.classList.add("counters");

    return counters;
};

const calculateCounter = (status) => {
    const items = reservations.filter((reservations) => reservations.includes(status));
    return items.length;
};

const displayCards = () => {
    const cards = document.createElement("div");
    cards.classList.add("reservation-cards");

    reservations.forEach((reservation) => {
        const card = document.createElement("div");
        const image = document.createElement("img");
        image.setAttribute("src", `src/assets/images/${reservation[1]}.jpg`);
        card.classList.add("reservation-card");
        image.classList.add("reservation-image");
        card.appendChild(image);

        const data = document.createElement("div");
        data.innerHTML += `<p></p>`;
        data.innerHTML += `<p><strong>Nombre del Huesped</strong>: ${reservation[0]} <strong>Número de pasaporte</strong>: ${reservation[4]}</p>`;
        data.innerHTML += `<p><strong>Tipo y número de habitación</strong>: ${reservation[1]} N° ${reservation[2] } </p>`;
        data.innerHTML += `<p><strong>Fecha de Ingreso</strong>: ${reservation[3]}</p>`;
        data.innerHTML += `<p><strong>Estado actual de la reserva</strong>: ${reservation[5]}</p>`;

        if (reservation[6] == true) {
            data.innerHTML += `<p><strong>VIP</strong></p>`;
        }
        if (reservation[5] == "CANCELLED") {
            card.classList.add("reservation-card-cancelled");
        }
        if (reservation[5] == "CONFIRMED") {
            card.classList.add("reservation-card-confirmed");
        }

        card.appendChild(data);
        cards.appendChild(card);
    });

    return cards;
};

const reservationsContainer = document.getElementById("reservation-container");

reservationsContainer.innerHTML += "<h2>Gestión de Reservas</h2>"

const quantityPending = calculateCounter(PENDING);
const quantityCancelled = calculateCounter(CANCELLED);
const quantityConfirmed = calculateCounter(CONFIRMED);
reservationsContainer.appendChild(displayCounters(quantityPending,quantityCancelled,quantityConfirmed));
reservationsContainer.innerHTML += "<h3>Lista de Reservas</h3>"
reservationsContainer.appendChild(displayCards());
