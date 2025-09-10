import { useContext } from "react";
import AppContext from "@/contexts/AppContext";
import PropTypes from "prop-types";
import { ButtonDanger, ButtonPrimary } from "@/components/buttons";
import "./taskListItem.scss";

const TaskListItem = ({ task }) => {
    const { taskData } = useContext(AppContext);
    const { remove, toggleStatus } = taskData;

    return (
        <li className={`task-list-item ${task.completed ? "task-list-item--completed" : ""}`}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>{task.completed ? "Completada" : "Pendiente"}</p>
            <div className="btn-container">
                <ButtonPrimary onClick={() => toggleStatus(task.id)} className="btn btn--status">
                    {task.completed ? "Marcar Pendiente" : "Marcar Completada"}
                </ButtonPrimary>
                <ButtonDanger onClick={() => remove(task.id)} className="btn btn--remove" size="sm">Eliminar</ButtonDanger>
            </div>
        </li>
    );
};

TaskListItem.propTypes = {
    task : PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        completed: PropTypes.boolean,
    }),
};

export default TaskListItem;