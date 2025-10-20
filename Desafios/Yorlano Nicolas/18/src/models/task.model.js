import { Schema, model } from "mongoose";

const taskSchema = new Schema({
    title: {
        type: String,
        required: [ true, "El título de la tarea es obligatorio" ],
        uppercase: true,
        trim: true,
        maxlength: 100,
    },
    description: {
        type: String,
        required: [ true, "La descripción de la tarea es obligatorio" ],
        lowercase: true,
        trim: true,
        maxlength: 500,
    },
}, {
    timestamps: true, // Creará dos campos: createdAt y updatedAt (datetime d eultima modificación y de creación del documento)
    versionKey: false, // No creará el campo __v en el documento
});

const TaskModel = model("tasks", taskSchema);

export default TaskModel;