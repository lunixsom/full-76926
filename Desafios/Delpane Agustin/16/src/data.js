const shoes = [
    {
        id: 1,
        brand: "Converse",
        model: "Classic Black",
        size: 38,
        price: 1000,
    },
    {
        id: 2,
        brand: "Adidas",
        model: "Running Black",
        size: 40,
        price: 1000,
    },
    {
        id: 3,
        brand: "Converse",
        model: "Classic Black Boots",
        size: 42,
        price: 1000,
    },
    {
        id: 4,
        brand: "Nike",
        model: "Air Black",
        size: 40,
        price: 1000,
    },
    {
        id: 5,
        brand: "Adidas",
        model: "Running Red",
        size: 42,
        price: 1000,
    },
    {
        id: 6,
        brand: "Nike",
        model: "Air Blue",
        size: 38,
        price: 1000,
    },
    {
        id: 7,
        brand: "Vans",
        model: "Black n' White",
        size: 40,
        price: 1000,
    },
    {
        id: 8,
        brand: "Converse",
        model: "Classic Red",
        size: 35,
        price: 1000,
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