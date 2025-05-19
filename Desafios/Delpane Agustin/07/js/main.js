function boolToYesNo(bool) {
    if (bool === true) return "Si";
    if(bool === false) return "No";
    return "-";
};

const RESERVATION_STATE_CANCELED = "CANCELED";
const RESERVATION_STATE_PENDING = "PENDING";
const RESERVATION_STATE_CONFIRMED = "CONFIRMED";

const ROOM_TYPE_STANDARD = "STANDARD";
const ROOM_TYPE_DELUXE = "DELUXE";
const ROOM_TYPE_SUITE = "SUITE";

const reservationManagementContainer = document.getElementById("reservation-management-container")
const reservationContainer = document.getElementById("reservation-container")

const reservations = [
    ["Juan A. Perez", ROOM_TYPE_STANDARD, 101, "10/01/2024", 28444777, RESERVATION_STATE_CANCELED, false],
    ["Anthony Tomas", ROOM_TYPE_DELUXE, 102, "15/01/2024", 50788955, RESERVATION_STATE_PENDING, true],
    ["Lorena Medina", ROOM_TYPE_STANDARD, 103, "20/01/2024", 74111000, RESERVATION_STATE_CANCELED, false],
    ["Patricia Fuentes", ROOM_TYPE_SUITE, 105, "25/01/2024", 9258258, RESERVATION_STATE_CONFIRMED, false],
    ["Gabriel G. Torres", ROOM_TYPE_STANDARD, 106, "25/01/2024", 75444888, RESERVATION_STATE_CONFIRMED, false],
    ["Max Power", ROOM_TYPE_SUITE, 108, "15/01/2024", 9258258, RESERVATION_STATE_CANCELED, true],
    ["Marian Sans", ROOM_TYPE_DELUXE, 107, "12/01/2024", 32588255, RESERVATION_STATE_PENDING, false],
    ["Clara Ponce", ROOM_TYPE_DELUXE, 108, "18/02/2024", 60155000, RESERVATION_STATE_CONFIRMED, true],
    ["Carla Blanco", ROOM_TYPE_STANDARD, 100, "05/03/2024", 40177070, RESERVATION_STATE_PENDING, true],
];

const displayCounters = (RESERVATION_STATE_CANCELED, RESERVATION_STATE_PENDING, RESERVATION_STATE_CONFIRMED) => {
    const counters = document.createElement("ul");
    counters.innerHTML += `<li><strong>Cancelados</strong>: ${RESERVATION_STATE_CANCELED}</li>`;
    counters.innerHTML += `<li><strong>Pendientes</strong>: ${RESERVATION_STATE_PENDING}</li>`;
    counters.innerHTML += `<li><strong>Confirmados</strong>: ${RESERVATION_STATE_CONFIRMED}</li>`;
    counters.classList.add("counters");

    return counters;
};

const calculateCounter = (status) => {
    const elements = reservations.filter((reservation) => reservation.includes(status))
    return elements.length
};

const displayCards = () => {
    const cards = document.createElement('div');
    cards.classList.add('cards-div')

    reservations.forEach(reservation => {
        const card = document.createElement('div')
        card.classList.add('card', `${(reservation[5]).toLowerCase()}`)
        
        const data = document.createElement('div');
        data.classList.add('card-data');
        data.innerHTML = `
            <p><strong>Nombre</strong>: ${reservation[0]}</p>
            <p><strong>Número de pasaporte</strong>: ${reservation[4]}</p>
            <p><strong>Tipo y número de habitación</strong>: ${reservation[1]}, ${reservation[2]}</p>
            <p><strong>Fecha de ingreso</strong>: ${reservation[3]}</p>
            <p><strong>Estado actual de la reserva</strong>: ${reservation[5]}</p>
        `;

        const vip = document.createElement('div');
        vip.classList.add('card-vip');
        vip.innerHTML = showIfVIP(reservation[6]);

        const image = document.createElement('div');
        image.classList.add('card-img-div');

        const img = document.createElement('img');
        img.setAttribute('alt', 'Imagen habitación');
        img.setAttribute('src', `./assets/images/${reservation[1].toLowerCase()}.jpg`);
        img.classList.add('card-img')
        image.appendChild(img);


        card.appendChild(data);
        card.appendChild(vip);
        card.appendChild(image);

        cards.appendChild(card);
    });

    return cards;
};


function showIfVIP(guestStatus){
    if (guestStatus === true) return `<p class='vip'><strong class='vip'>VIP</strong></p>`
    else return ''
}

const qtyCancelled = calculateCounter(RESERVATION_STATE_CANCELED);
const qtyPending = calculateCounter(RESERVATION_STATE_PENDING);
const qtyConfirmed = calculateCounter(RESERVATION_STATE_CONFIRMED);

console.log(reservations[0][0])
reservationManagementContainer.appendChild(displayCounters(qtyCancelled, qtyPending, qtyConfirmed))
reservationContainer.appendChild(displayCards())