import { Router } from "express";
import Task from "../models/task.model.js";

const router = Router();

// Ruta para obtener las tareas con filtros. URL: http://localhost:3000/api/tasks
router.get("/", async (req, res) => {
    try {
        const { title, description } = req.query;

        const filters = {};
        if (title) filters.title = { $regex: title, $options: "i" };
        if (description) filters.description = { $regex: description, $options: "i" };
        console.log(filters);

        const tasks = await Task.find(filters);

        res.status(200).json({ status: "success", payload: tasks });
    } catch (error) {
        console.log("GET /api/tasks error:", error);
        res.status(500).json({ status: "error", message: error.message });
    }
});

// Ruta para crear una tarea. URL: http://localhost:3000/api/tasks
router.post("/", async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title || !description) {
            return res.status(400).json({ status: "error", message: "Faltan datos de relevancia" });
        }

        const taskModel = new Task({
            title,
            description,
        });

        console.log(taskModel);
        const createdTask = await taskModel.save();

        res.status(201).json({ status: "success", payload: createdTask });
    } catch (error) {
        console.log("POST /api/tasks error:", error);
        res.status(500).json({ status: "error", message: error.message });
    }
});

export default router;