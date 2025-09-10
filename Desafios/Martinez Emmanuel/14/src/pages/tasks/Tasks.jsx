
import { Text } from "@/components/texts";
import "./tasks.scss";
import AppContext from "@/contexts/AppContext";
import { useContext } from "react";
import { ButtonPrimary } from "@/components/buttons";
import TaskList from "./task-list/TaskList";

const Tasks = () => {
    const { tasks, add, getTotalCount } = useContext(AppContext);

    const total = getTotalCount();

    const handleAddTask = () => {
        const id = Date.now();
        add(`Tarea ${id}`, `Descripción de la tarea ${id}`);
    };

    return (
        <div className="tasks">
            <Text variant="h2">Lista de Tareas ({total})</Text>
            <ButtonPrimary size="md" onClick={handleAddTask}>Agregar Tarea</ButtonPrimary>

            <TaskList tasks={tasks} />
        </div>
    );
};

export default Tasks;