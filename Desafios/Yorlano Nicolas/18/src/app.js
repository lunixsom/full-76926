import "dotenv/config";
import express from "express";
import { config as configJson } from "./config/json.config.js";
import { connectDB } from "./config/mongoose.config.js";
import { config as configStatic } from "./config/static.config.js";

import taskRouter from "./routers/task.router.js";
import inquiryRouter from "./routers/inquiry.router.js";

const app = express();
configJson(app);
configStatic(app);
connectDB();

const PORT = process.env.PORT;
const HOST = process.env.HOST;

// Declaración de rutas
app.use("/api/task", taskRouter);
app.use("/api/inquiry", inquiryRouter);

// Control de rutas inexistentes
app.use((req, res) => {
    res.status(404).send("<h1>Error 404</h1><h3>La URL indicada no existe en este servidor</h3>");
});

// Método oyente de solicitudes
app.listen(PORT, HOST, () => {
    console.log(`Ejecutándose en http://${HOST}:${PORT}`);
});