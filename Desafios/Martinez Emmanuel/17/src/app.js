
import "dotenv/config";
import express from "express";
import { config as configJson } from "./config/json.config.js";
import { config as configStatic } from "./config/static.config.js";

import shoeRouter from "./routes/shoe.router.js";
import inquiryRouter from "./routes/inquiry.router.js";

const app = express();
configJson(app);
configStatic(app);

const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.use("/api/shoes", shoeRouter);
app.use("/api/inquiry", inquiryRouter);

// Control de rutas inexistentes
app.use((req, res) => {
    res.status(404).send("<h1>Error 404</h1><h3>La URL indicada no existe en este servidor</h3>");
});

// Método oyente de solicitudes
app.listen(PORT, HOST, () => {
    console.log(`Ejecutándose en http://${HOST}:${PORT}`);
});