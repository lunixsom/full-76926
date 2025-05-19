// Estados de reserva
const PENDING = "PENDING";
const CANCELED = "CANCELED";
const CONFIRMED = "CONFIRMED";

// Tipos de habitación
const STANDARD = "STANDARD";
const DELUXE = "DELUXE";
const SUITE = "SUITE";

// Datos
const reservations = [
  ["Juan A. Pérez", STANDARD, "N°101", "10 de enero de 2024", 28444777, CANCELED, false],
  ["Anthony Tomas", DELUXE, "N°102", "15 de enero de 2024", 50788955, CONFIRMED, true],
  ["Lorena Medina", STANDARD, "N°103", "20 de enero de 2024", 74111000, CANCELED, false],
  ["Patricia Fuentes", SUITE, "N°105", "25 de enero de 2024", 9258258, CONFIRMED, false],
  ["Javier G. Torres", STANDARD, "N°106", "25 de enero de 2024", 75444888, CANCELED, false],
  ["Max Power", SUITE, "N°108", "15 de enero de 2024", 28555888, CANCELED, true],
  ["Marian Sans", DELUXE, "N°107", "12 de enero de 2024", 32588255, CANCELED, false],
  ["Clara Ponce", DELUXE, "N°109", "18 de enero de 2024", 60155000, CONFIRMED, true],
  ["Carla Blanco", STANDARD, "N°100", "5 de marzo de 2024", 40177070, PENDING, true],
];

// Despliega los contadores
const displayCounters = (pending, canceled, confirmed ) => {
    const counters = document.createElement("ul");
    counters.innerHTML += `<li><strong>Pendientes</strong>: ${pending}</li>`;
    counters.innerHTML += `<li><strong>Cancelados</strong>: ${canceled}</li>`;
    counters.innerHTML += `<li><strong>Confirmados</strong>: ${confirmed}</li>`;
    counters.classList.add("counters");

    return counters;
};

// Calcula la cantidad de un tipo de reserva
const calculateCounters = (status) => {
  const items = reservations.filter((reservation) => reservation.includes(status));
  return items.length;
}


// Muestra las cards
const displayCards = () => {
  const cards = document.createElement("div");
  cards.classList.add("reservations-container");

  reservations.forEach((reservation, index) => {
        const card = document.createElement("div");

        const image = document.createElement("img");

        if(reservation[1] === STANDARD) image.setAttribute("src", `assets/images/${reservation[1].toLowerCase()}.jpg`);
        if(reservation[1] === SUITE) image.setAttribute("src", `assets/images/${reservation[1].toLowerCase()}.jpg`);
        if(reservation[1] === DELUXE) image.setAttribute("src", `assets/images/${reservation[1].toLowerCase()}.jpg`);

        image.classList.add("reservation-image");

        const data = document.createElement("div");
        data.innerHTML += `<p></p>`;
        data.innerHTML += `<p><strong>Huésped</strong>: ${reservation[0]}  <strong>Pasaporte N°</strong>: ${reservation[4]}</p>`;
        data.innerHTML += `<p><strong>Habitación</strong>: ${reservation[1]}  ${reservation[2]}</p>`;
        data.innerHTML += `<p><strong>Fecha de ingreso</strong>: ${reservation[3]}</p>`;
        data.innerHTML += `<p><strong>Estado de la reserva</strong>: ${reservation[5]}</p>`;



        card.classList.add("reservation-card");
        card.classList.add("reservation-card-pending");

        if (reservation[5] === CONFIRMED) {
          card.classList.remove("reservation-card-pending", "reservation-card-canceled");
          card.classList.add("reservation-card-confirmed");
        } else if (reservation[5] === CANCELED) {
          card.classList.remove("reservation-card-pending", "reservation-card-confirmed");
          card.classList.add("reservation-card-canceled");
        }

        card.appendChild(data);

        if (reservation[6] === true) {
          const vipLabel = document.createElement("label");
          vipLabel.innerHTML = `<strong>VIP</strong>`;
          card.appendChild(vipLabel);
        }

        card.appendChild(image);
        cards.appendChild(card);
    });



  return cards;
}


// Ejecución
const reservationsContainer = document.getElementById("reservations-container");

reservationsContainer.innerHTML += "<h2>Gestión de Reservas</h2>"
const quantityReservationsPending = calculateCounters(PENDING);
const quantityReservationsCanceled = calculateCounters(CANCELED);
const quantityReservationsConfirmed = calculateCounters(CONFIRMED);
reservationsContainer.appendChild(displayCounters(quantityReservationsPending, quantityReservationsCanceled, quantityReservationsConfirmed));

reservationsContainer.innerHTML += "<h3>Lista de Reservas</h3>";
reservationsContainer.appendChild(displayCards());