
import "dotenv/config";
import express from "express";
import { shoes, generateId } from "./data.js";

const app = express();

const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.use(express.json());

app.get("/api/shoes", (req, res) => {
    const { brand, size } = req.query;

    let filteredShoes = [...shoes];

    if(brand) {
        filteredShoes = filteredShoes.filter((shoe) => String(shoe.brand).toLowerCase() === String(brand).toLocaleLowerCase());
    }

    if(size) {
        filteredShoes = filteredShoes.filter((shoe) => Number(shoe.size) === Number(size));
    }

    res.status(200).send(filteredShoes);
});

app.get("/api/shoes/:id", (req, res) => {
    const { id } = req.params;

    const shoe = shoes.find((shoe) => shoe.id === Number(id));

    if(!shoe) {
        return res.status(404).send({ message: "El id no corresponde a un zapato registrado" });
    }

    res.status(200).send(shoe);
});

app.post("/api/shoes/", (req, res) =>{
    const { brand, model, size, price } = req.body;

    if(!brand || !model || !size || !price){
        return res.status(404).send("Faltan datos de relevancia.");
    }

    const newShoe = { id: generateId(), brand, model, size, price };
    shoes.push(newShoe);

    res.status(201).send(newShoe);

});

app.put("/api/shoes/:id", (req, res) =>{
    const { id } = req.params;

    const values = {};

    if(req.body.brand) values.brand = req.body.brand;
    if(req.body.model) values.model = req.body.model;
    if(req.body.size) values.size = req.body.size;
    if(req.body.price) values.price = req.body.price;

    const index = shoes.findIndex((shoe) => shoe.id === Number(id));

    const updateShoe = { ...shoes[index], ...values };
    shoes[index] = updateShoe;

    res.status(200).send(updateShoe);
});

app.patch("/api/shoes/:id/size", (req, res) =>{
    const { id } = req.params;
    const { size } = req.body;

    const index = shoes.findIndex((shoe) => shoe.id === Number(id));

    if(index < 0) {
        return res.status(404).send({ message: "El id no corresponde a un zapato registrado" });
    }

    if(!size) {
        return res.status(400).send({ message: "Faltan datos de relevancia" });
    }

    if(isNaN(size)) {
        return res.status(400).send({ message: "El tamaño debe ser un valor numérico" });
    }

    if(size < 20 || size > 50) {
        return res.status(400).send({ message: "El tamaño debe estar entre 20 y 50" });
    }

    shoes[index].size = Number(size);

    return res.status(204).send();

});

app.delete("/api/shoes/:id", (req, res) => {
    const { id } = req.params;

    const index = shoes.findIndex((shoe) => shoe.id === Number(id));
    if (index < 0) {
        return res.status(404).send({ message: "El id no corresponde a un zapato registrado" });
    }

    shoes.splice(index, 1);

    return res.status(204).send();

});

app.use((req, res) => {
    res.status(404).send("<h1>Error 404</h1><h3>La URL indicada no existe en este servidor</h3>");
});

app.listen(PORT, HOST, () => {
    console.log(`Ejecutándose en http://${HOST}:${PORT}/api/shoes`);
});