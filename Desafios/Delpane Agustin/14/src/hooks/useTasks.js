import { useEffect, useState } from "react";

export const useTasks = () => {

    const [ tasks, setTasks ] = useState(() => {
        const saved = localStorage.getItem("tasks");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const [ id, setId ] = useState(() => {
        const savedId = localStorage.getItem("id");
        return savedId ? JSON.parse(savedId) : 1;
    });

    useEffect(() => {
        localStorage.setItem("id", JSON.stringify(id));
    });

    const generateId = () =>{
        setId(id + 1);
    };

    const add = () => {
        generateId();
        const newTask = {
            id: id,
            title: setTitle(id),
            description: setDescription(id),
            completed: false,
        };
        setTasks((prev) => [ ...prev, newTask ]);
    };

    const setTitle = (id) => {
        return (`Tarea ${id}`);
    };

    const setDescription = (id) => {
        return (`Descripcion de tarea ${id}`);
    };

    const remove = (id) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    };

    const toggleStatus = (id) => {
        setTasks((tasks) => tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task));
    };

    const getCompletedCount = () => (
        tasks.filter((task) => task.completed).length
    );

    const getTotalCount = () => {
        return(
            tasks.length
        );
    };

    const resetId = () => {
        setId(1);
    };

    return (
        { tasks, add, remove, toggleStatus, getCompletedCount, getTotalCount, resetId }
    );
};

export default useTasks;