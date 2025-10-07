const shoes = [
    {
        id: 1,
        brand: "Puma",
        model: "Suade XL",
        size: 39,
        price: 170000,
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