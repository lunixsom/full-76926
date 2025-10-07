const shoes = [
    {
        id: 1,
        brand: "LadyStork",
        model: "Stilleto",
        size: 37,
        price: 65000,
    },
    {
        id: 1,
        brand: "LadyStork",
        model: "Stilleto",
        size: 37,
        price: 65000,
    },
    {
        id: 2,
        brand: "Goat",
        model: "botas caña corta",
        size: 37,
        price: 95500,
    },
    {
        id: 3,
        brand: "Viamo",
        model: "sandalias",
        size: 36,
        price: 73300,
    },
    {
        id: 4,
        brand: "XL",
        model: "botas texanas",
        size: 38,
        price: 80500,
    },

];

const generateId = () => {
    let maxId = 0;

    shoes.forEach((item) => {
        if (item.id > maxId) {
            maxId = item.id;
        }
    });

    return maxId + 1;
};

export {
    generateId, shoes,
};