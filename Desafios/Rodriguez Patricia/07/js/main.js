const PENDING = "Pendiente";
const CANCELED = "Cancelada";
const CONFIRMED = "Confirmada";
const STANDARD_ROOM = "Standard";
const DELUXE_ROOM = "Deluxe";
const SUIT_ROOM = "Suit";


const guestsInfo= [
    ["Juan Perez", STANDARD_ROOM, 101, "2024/01/10", "28444777", PENDING,false],
    ["Anthony Tomas", DELUXE_ROOM, 102, "2024/01/15", "50788955", CANCELED, true],
    ["Lorena Medina", STANDARD_ROOM, 103, "2024/01/20", "74111000", CANCELED, false],
    ["Patricia Fuentes", SUIT_ROOM, 105, "2024/01/25", "9258258", PENDING, false],
    ["Javier G. Torres", STANDARD_ROOM, 106,"2024/01/25", "75444888", CANCELED, false],
    ["Max Power", SUIT_ROOM, 108, "2024/01/15", "28555888", CANCELED, true],
    ["Marian Sans", DELUXE_ROOM, 107, "2024/01/12", "32588255", PENDING, false],
    ["Clara Ponce", DELUXE_ROOM, 109, "2024/02/18", "60155000", CONFIRMED, false],
    ["Carla Blanco", STANDARD_ROOM, 100, "2024/03/05", "40177070", PENDING, true],
];

const displayCounters= (PENDING, CANCELED, CONFIRMED) => {
    const counters= document.createElement("ul");
    counters.innerHTML += `<li><strong>Pendientes</strong>: ${PENDING}</li>`;
    counters.innerHTML += `<li><Strong>Canceladas</strong>: ${CANCELED}</li>`;
    counters.innerHTML += `<li><strong>Confirmadas</strong>: ${CONFIRMED}</li>`;
    counters.classList.add("counters");
    return counters;
};

const calculateCounter = (status) => {
    const items= guestsInfo.filter((guest) => guest.includes(status));
    return items.length;
};
const counterTotalContainer = document.getElementById("counters-container");
const quantityGuestsInfoPending= calculateCounter(PENDING);
const quantityGuestsInfoCanceled= calculateCounter(CANCELED);
const quantityGuestsInfoConfirmed= calculateCounter(CONFIRMED);
counterTotalContainer.appendChild(displayCounters(quantityGuestsInfoPending, quantityGuestsInfoCanceled, quantityGuestsInfoConfirmed));

const createCardGuestInfo= (fullName, roomType, roomNumber, chekIndate, passportNumber, status, dataVip) =>{
    const cardGuestInfo = document.createElement("div");
    cardGuestInfo.classList.add("guest");
    cardGuestInfo.classList.add(`guest-${ status.toLowerCase()}`);
    const cardGuestInfoData= document.createElement("div");
    cardGuestInfoData.innerHTML += `<p><strong>Huestped:</strong>${fullName}<strong>Pasaporte N°:</strong>${passportNumber}</p>`;
    cardGuestInfoData.innerHTML += `<p><strong>Habitación: </strong>${roomType} N°: ${roomNumber}</p>`;
    cardGuestInfoData.innerHTML += `<p><strong>Fecha de Ingreso: </strong>${chekIndate}</p>`;
    cardGuestInfoData.innerHTML += `<p><strong>Estado de la Reserva:</strong>${status}</p>`;

    cardGuestInfo.appendChild(cardGuestInfoData);


const roomImage = document.createElement("img");
roomImage.setAttribute("src", `assets/images/${roomType.toLowerCase()}.jpg`);

  if(dataVip === true){
        const cardDataVip = document.createElement("div");
        cardDataVip.innerHTML += `<p><strong>VIP</strong></p>`;
        cardDataVip.classList.add("reservation-vip");
        cardGuestInfo.appendChild(cardDataVip);
    };
    

cardGuestInfo.appendChild(roomImage);
return cardGuestInfo;
};


const createGuestsInfoContainer = () => {
const guestsInfoContainer = document.getElementById("guestsInfo-container");

  guestsInfo.forEach((guestInfo) => {
   const fullName = guestInfo [0];
   const roomType = guestInfo[1];
   const roomNumber = guestInfo[2];
   const chekIndate = guestInfo[3];
   const passportNumber = guestInfo[4];
   const status = guestInfo[5];
   const dataVip = guestInfo[6];

/*     if(dataVip === true){
        const cardDataVip = document.createElement("div");
        cardDataVip.innerHTML += `<p><strong>VIP</strong></p>`;
        cardDataVip.classList.add("reservation-vip");
        cardGuestInfo.appendChild(cardDataVip);
    }; */
    
    switch(status){
        case PENDING:
              guestsInfoContainer.classList.add("guest-card-pending");
        break;
        case CANCELED:
            guestsInfoContainer.classList.add("guest-card-canceled");
        break;
        case CONFIRMED:
            guestsInfoContainer.classList.add("guest-card-confirmed");
        break;
    };
   
    const cardGuestInfo = createCardGuestInfo(fullName, roomType, roomNumber, chekIndate, passportNumber, status, dataVip);
    guestsInfoContainer.appendChild(cardGuestInfo);
  });


};



createGuestsInfoContainer()