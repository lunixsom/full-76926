import { Router } from "express";
import { isValidId } from "../config/mongoose.config.js";
import TaskModel from "../models/task.model.js";

const router = Router();

// Función privada para manejar errores de validación
const handleValidationError = (error, res) => {
    if (error.name === "ValidationError") {
        const firstError = Object.values(error.errors)[0];
        return res.status(400).json({ status: "error", message: firstError.message });
    }
    return false;
};

// Ruta para obtener las tareas URL: http://localhost:3000/api/task
router.get("", async (req, res) => {
    try {
        const task = await TaskModel.find();

        res.status(200).json({ status: "success", payload: task });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
});

// Ruta para obtener una tarea por su ID. URL: http://localhost:3000/api/task/id
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        if (!isValidId(id)) {
            return res.status(400).json({ status: "error", message: "El id es inválido" });
        }

        const task = await TaskModel.findById(id);

        if (!task) {
            return res.status(404).json({ status: "error", message: "El id no corresponde a una tarea registrada" });
        }

        res.status(200).json({ status: "success", payload: task });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
});

// Ruta para crear una tarea. URL: http://localhost:3000/api/task
router.post("", async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title) {
            return res.status(400).json({ status: "error", message: "Faltan datos de relevancia" });
        }

        const taskModel = new TaskModel({
            title,
            description,
        });

        const createdTask = await taskModel.save();

        res.status(201).json({ status: "success", payload: createdTask });
    } catch (error) {
        if (handleValidationError(error, res)) return;

        res.status(500).json({ status: "error", message: error.message });
    }
});

// Ruta para actualizar una tarea por su ID. URL: http://localhost:3000/api/task/id
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        if (!isValidId(id)) {
            return res.status(400).json({ status: "error", message: "El id es invalido" });
        }

        const task = await TaskModel.findById(id);

        if (!task) {
            return res.status(404).json({ status: "error", message: "El id no corresponde a una tarea registrado" });
        }

        if (req.body.title) task.title = req.body.title;
        if (req.body.description) task.description = req.body.description;

        const updateTask = await task.save();

        res.status(200).json({ status: "success", payload: updateTask });
    } catch (error) {
        if (handleValidationError(error, res)) return;

        res.status(500).json({ status: "error", message: error.message });
    }
});

// Ruta para eliminar una tarea por su ID. URL: http://localhost:3000/api/task/id
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        if (!isValidId(id)) {
            return res.status(400).json({ status: "error", message: "El id es invalido" });
        }

        const task = await TaskModel.findById(id);

        if (!task) {
            return res.status(404).json({ status: "error", message: "El id no corresponde a una tarea registrado" });
        }

        await TaskModel.deleteOne({ _id: id });

        res.status(200).json({ status: "success" });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
});

export default router;