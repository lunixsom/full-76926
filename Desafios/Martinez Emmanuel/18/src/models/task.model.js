import { Schema, model } from "mongoose";

const taskSchema = new Schema({
    title: {
        type: String,
        required: [ true, "El título es obligatorio" ],
        trim: true,
    },
    description: {
        type: String,
        required: [ true, "La descripción es obligatoria" ],
        trim: true,
    },
}, {
    timestamps: true,
    versionKey: false,
},
);

const Task = model("Task", taskSchema);

export default Task;