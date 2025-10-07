import "dotenv/config";
import express from "express";
import { generateId, shoes } from "./data.js";

const app = express();

const PORT = process.env.PORT;
const HOST = process.env.HOST;

// Middleware: convierte el cuerpo JSON de la solicitud y lo guarda en `req.body`.
app.use(express.json());

// Endpoint para obtener los zapatos (filtros opcionales por marca y talla)
app.get("/api/shoes", (req, res) => {
    const { brand, size } = req.query;

    let filteredShoes = [...shoes];

    if (brand) {
        filteredShoes = filteredShoes.filter((shoe) => String(shoe.brand).toLowerCase() === String(brand).toLowerCase());
    }

    if (size) {
        filteredShoes = filteredShoes.filter((shoe) => Number(shoe.size) === Number(size));
    }

    res.status(200).send(filteredShoes);
});

// Endpoint para obtener un zapato en específico por ID
app.get("/api/shoes/:id", (req, res) => {
    const { id } = req.params;
    const shoe = shoes.find((shoe) => shoe.id === Number(id));

    if (!shoe) {
        return res.status(404).send({ message: "No se encontro el zapato" });
    }

    res.status(200).send(shoe);
});

// Endpoint para crear un zapato. 
app.post("/api/shoes", (req, res) => {
    const { brand, model, size, price } = req.body;

    if (!brand || !model || !size || isNaN(size) || !price || isNaN(price)) {
        return res.status(400).send({ message: "Datos inválidos" });
    }

    const newShoe = { id: generateId(), brand, model, size, price };
    shoes.push(newShoe);

    res.status(201).send(newShoe);
});

// Endpoint para modificar completamente un zapato
app.put("/api/shoes/:id", (req, res) => {
    const { id } = req.params;
    const index = shoes.findIndex((shoe) => shoe.id === Number(id));

    if (index === -1) {
        return res.status(404).send({ message: "No se encontro el zapato" });
    }

    const { brand, model, size, price } = req.body;
    if (!brand || !model || !size || isNaN(size) || !price || isNaN(price)) {
        return res.status(400).send({ message: "Faltan datos para la modificación" });
    }

    const updatedShoe = { id: Number(id), brand, model, size, price };
    shoes[index] = updatedShoe;

    res.status(200).send(updatedShoe);
});

// Endpoint para actualizar solo la talla de un zapato
app.patch("/api/shoes/:id/size", (req, res) => {
    const { id } = req.params;
    const { size } = req.body;

    if (!size) {
        return res.status(400).send({ message: "Faltan datos de relevancia" });
    }

    const index = shoes.findIndex((shoe) => shoe.id === Number(id));
    if (index < 0) {
        return res.status(404).send({ message: "El id no corresponde a un zapato registrado" });
    }

    shoes[index].size = Number(size);

    res.status(200).send();
});

// Endpoint para eliminar un zapato
app.delete("/api/shoes/:id", (req, res) => {
    const { id } = req.params;

    const index = shoes.findIndex((shoe) => shoe.id === Number(id));
    if (index === -1) {
        return res.status(404).send({ message: "No se encontro el zapato" });
    }

    shoes.splice(index, 1);

    res.status(204).send();
});

// Control de rutas inexistentes
app.use((req, res) => {
    res.status(404).send("<h1>Error 404</h1><p>Recurso no encontrado</p>");
});

// Método oyente de solicitudes
app.listen(PORT, HOST, () => {
    console.log(`Ejecutándose en http://${HOST}:${PORT}`);
});