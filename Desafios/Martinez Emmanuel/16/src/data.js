const shoes = [
    {
        id: 1,
        brand: "Nike",
        model: "Air Force 1",
        size: 42,
        price: 120000,
    },
    {
        id: 2,
        brand: "Adidas",
        model: "Superstar",
        size: 41,
        price: 95000,
    },
    {
        id: 3,
        brand: "Puma",
        model: "RS-X",
        size: 43,
        price: 110000,
    },
    {
        id: 4,
        brand: "Converse",
        model: "Chuck Taylor",
        size: 40,
        price: 80000,
    },
    {
        id: 5,
        brand: "Reebok",
        model: "Club C 85",
        size: 44,
        price: 87000,
    },
    {
        id: 6,
        brand: "Vans",
        model: "Old Skool",
        size: 42,
        price: 76000,
    },
    {
        id: 7,
        brand: "Jordan",
        model: "Retro 4",
        size: 43,
        price: 200000,
    },
    {
        id: 8,
        brand: "New Balance",
        model: "550",
        size: 41,
        price: 115000,
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
    shoes,
    generateId,
};