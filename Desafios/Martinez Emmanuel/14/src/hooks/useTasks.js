import { useEffect, useState } from "react";

const useTasks = () => {
    const [ tasks, setTasks ] = useState(() => {
        try {
            const saved = localStorage.getItem("tasks");
            return saved ? JSON.parse(saved) : [];
        } catch {
            return [];
        }
    });

    // Guardar cada vez que cambia el estado
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    // Agregar nueva tarea
    const add = () => {
    // buscamos el primer id disponible (hueco en la secuencia)
        let nextId = 1;
        while (tasks.some((t) => t.id === nextId)) {
            nextId++;
        }

        const newTask = {
            id: nextId,
            title: `Tarea ${nextId}`,
            description: `Descripción de la tarea ${nextId}`,
            completed: false,
        };

        setTasks((prev) => [ ...prev, newTask ].sort((a, b) => a.id - b.id));

    };

    // Eliminar por id
    const remove = (id) => {
        setTasks((prev) => prev.filter((t) => t.id !== id));
    };

    // Cambiar estado
    const toggleStatus = (id) => {
        setTasks((prev) =>
            prev.map((t) =>
                t.id === id ? { ...t, completed: !t.completed } : t,
            ),
        );
    };

    // Contar completadas
    const getCompletedCount = () => tasks.filter((t) => t.completed).length;

    // Contar total
    const getTotalCount = () => tasks.length;

    // Retornamos todos los valores
    return {
        tasks,
        add,
        remove,
        toggleStatus,
        getCompletedCount,
        getTotalCount };
};

export default useTasks;