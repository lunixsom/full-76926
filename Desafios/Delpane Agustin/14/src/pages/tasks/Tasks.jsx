import { useContext } from "react";
import AppContext from "@/contexts/AppContext";
import TaskList from "./tasksList/TaskList";
import { ButtonPrimary, ButtonDanger } from "@/components/buttons";
import "./tasks.scss";

const Tasks = () => {
    const { taskData } = useContext(AppContext);
    const { add, tasks, resetId } = taskData;

    return (
        <div className="tasks">
            <h2>Lista de Tareas ({(tasks.length)})</h2>
            <div className="tasks__form">
                <ButtonPrimary onClick={() => add()} className="add-btn">Agregar Tarea</ButtonPrimary>
                <ButtonDanger onClick={resetId} className="reset-id-btn">Reset ID</ButtonDanger>
            </div>
            <TaskList />
        </div>
    );
};

export default Tasks;