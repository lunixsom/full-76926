
const STANDARD_ROOM_TYPE = "STANDARD";
const DELUXE_ROOM_TYPE = "DELUXE";
const SUITE_ROOM_TYPE = "SUITE";

const PENDING_RESERVATION_STATUS1 = "PENDING";
const CANCELED_RESERVATION_STATUS1 = "CANCELED";
const CONFIRMED_RESERVATION_STATUS1 = "CONFIRMED";


const reservations = [
    ["Juan A. Pérez", 28444777, STANDARD_ROOM_TYPE, 101, "2024-01-10", CANCELED_RESERVATION_STATUS1, false],
    ["Anthony Tomas", 50788955, DELUXE_ROOM_TYPE, 102, "2024-01-15", CONFIRMED_RESERVATION_STATUS1, true],
    ["Lorena Medina", 74111000, STANDARD_ROOM_TYPE, 103, "2024-01-20", CANCELED_RESERVATION_STATUS1, false],
    ["Patricia Fuentes", 9258258, SUITE_ROOM_TYPE, 105, "2024-01-25", CONFIRMED_RESERVATION_STATUS1, false],
    ["Javier G. Torres", 75444888, STANDARD_ROOM_TYPE, 106, "2024-01-25", CONFIRMED_RESERVATION_STATUS1, false],
    ["Max Power", 28555888, SUITE_ROOM_TYPE, 108, "2024-01-15", CANCELED_RESERVATION_STATUS1, true],
    ["Marian Sans", 32588255, DELUXE_ROOM_TYPE, 107, "2024-01-12", PENDING_RESERVATION_STATUS1, false],
    ["Clara Ponce", 60155000, DELUXE_ROOM_TYPE, 109, "2024-02-18", CONFIRMED_RESERVATION_STATUS1, false],
    ["Carla Blanco", 40177070, STANDARD_ROOM_TYPE, 100, "2024-03-05", PENDING_RESERVATION_STATUS1, true],
]

    const countReservations = (STATUS1) => {
        let quantity= 0;

         reservations.forEach((item)=> {
            if (item.includes (STATUS1)) {
                quantity++;
            }
        });

        return quantity;
    };

    const counters = () => {
        const counters= document.createElement("div");
        counters.classList.add("counters");
        counters.innerHTML  +=`<p> Confirmadas:${countReservations(CONFIRMED_RESERVATION_STATUS1)} </p>`;
        counters.innerHTML  +=`<p> Pendinetes: ${countReservations(PENDING_RESERVATION_STATUS1)} </p>`;
        counters.innerHTML  +=`<p> Canceladas:${countReservations(CANCELED_RESERVATION_STATUS1)} </p>` ;

        return counters;
    }
        const createCardReservation = (fullName, passportNumber, roomType, roomNumber, checkIn, status, isVip) => {
        const reservationList = document.getElementById("div")
        
        CardReservation.classList.add("reservation");
        CardReservation.classList.add(`reservation-${status.toLowerCase()}`)



        const CardReservationData= document.createElement("div");
        CardReservation.innerHTML += `<p><strong>Huésped</strong>: ${fullName} <strong>Pasaporte N°:</strong> ${passportNumber}</p>`;
        CardReservation.innerHTML += `<p><strong>Habitacion</strong>: ${roomType} <strong> N°: ${roomNumberNumber}</p>`;
        CardReservation.innerHTML += `<p><strong>Fecha de ingreso</strong>: ${checkIn}</p>`
        CardReservation.innerHTML += `<p><strong>Estado de la Reserva </strong>: ${STATUS1}</p>`

        if (isVip === true) {
        const cardReservationVip = document.createElement("div");
        cardReservationVip.innerHTML = `<p>VIP</p>`;
        cardReservationVip.classList.add("reservation-vip");
        cardReservation.appendChild(cardReservationVip);
        }

        const cardReservationImage = document.createElement("img");
        cardReservationImage.setAttribute("src", `assets/images/${roomType.toLowerCase()}.jpg`);
        cardReservationImage.classList.add("reservation-image");
        cardReservation.appendChild(cardReservationImage);

        return cardReservation;
}


const reservation = document.getElementById ("reservation-book");
reservation.innerHTML += "<h2>Gestión de Reservas</h2>";
const crearcounters=counters();
reservation.appendChild(crearcounters);

reservation.innerHTML += `<h3>Lista De Reservas</h3>`;
reservations.forEach((reservation) => {
    const fullName = reservation[0];
    const passportNumber = reservation[1];
    const roomType = reservation[2];
    const roomNumber = reservation[3];
    const checkIn = reservation[4];
    const status = reservation[5];
    const isVip = reservation[6];

    const cardReservation = createCardReservation(fullName, passportNumber, roomType, roomNumber, checkIn, status, isVip);
    reservation.appendChild(cardReservation);
});