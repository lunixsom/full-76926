import React, { useContext } from "react";
import "./task-list-item.scss";
import PropTypes from "prop-types";
import AppContext from "@/contexts/AppContext";
import { ButtonDanger, ButtonPrimary } from "@/components/buttons";

const TaskListItem = ({ task }) => {
    const { remove, toggleStatus } = useContext(AppContext);

    return (
        <div className="task-list-item">

            <h3>{task.title}</h3>
            <div className="task-list-item__info">
                <p>{task.description}</p>
                <p>{task.completed ? "Completada ✅" : "Pendiente ⏳"}</p>
            </div>
            <div className="task-list-item__actions">
                <ButtonPrimary size="sm" onClick={() => toggleStatus(task.id)}>
                    {task.completed ? "Marcar Pendiente" : "Marcar Completada"}
                </ButtonPrimary>
                <ButtonDanger size="sm" onClick={() => remove(task.id)}>Eliminar</ButtonDanger>
            </div>

        </div>
    );
};

TaskListItem.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        completed: PropTypes.bool.isRequired,
    }).isRequired,
};

export default TaskListItem;