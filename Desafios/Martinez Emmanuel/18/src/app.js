
import "dotenv/config";
import express from "express";
import { config as configJson } from "./config/json.config.js";
import { connectDB } from "./config/mongoose.config.js";
import { config as configStatic } from "./config/static.config.js";

import taskRouter from "./routes/task.router.js";

const app = express();
configJson(app);
configStatic(app);
connectDB();

const PORT = process.env.PORT;
const HOST = process.env.HOST;

// Declaración de rutas
app.use("/api/tasks", taskRouter);

// Control de rutas inexistentes
app.use((req, res) => {
    res.status(404).send("<h1>Error 404</h1><h3>La URL indicada no existe en este servidor</h3>");
});

app.use((req, _res, next) => {
    console.log(`[LOG] ${req.method} ${req.originalUrl} ct=${req.headers["content-type"]||"-"}`);
    next();
});

app.use((err, req, res, next) => {
    console.error("Middleware error:", err);
    res.status(400).json({ status: "error", message: err.message });
    next();
});

// Método oyente de solicitudes
app.listen(PORT, HOST, () => {
    console.log(`Ejecutándose en http://${HOST}:${PORT}`);
});