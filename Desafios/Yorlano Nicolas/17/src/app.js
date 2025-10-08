import "dotenv/config";
import express from "express";
import { config as configJson } from "./config/json.config.js";
import { config as configStatic } from "./config/static.config.js";

import shoeRouter from "./routers/shoe.router.js";
import inquiryRouter from "./routers/inquiry.router.js";

const app = express();
configJson(app);
configStatic(app);

const PORT = process.env.PORT;
const HOST = process.env.HOST;

// Declaración de rutas
app.use("/api/shoes", shoeRouter);
app.use("/api/inquiry", inquiryRouter);

// Control de rutas inexistentes
app.use((req, res) => {
    res.status(404).send("<h1>Error 404</h1><p>Recurso no encontrado</p>");
});

// Método oyente de solicitudes
app.listen(PORT, HOST, () => {
    console.log(`Ejecutándose en http://${HOST}:${PORT}`);
});