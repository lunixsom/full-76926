import React from "react";
import "./task-list.scss";
import PropTypes from "prop-types";
import TaskListItem from "./task-list-item/TaskListItem";

const TaskList = ({ tasks }) => {

    return (
        <div className="task-list">
            {tasks.length === 0 ? (
                <p>No hay tareas aún</p>
            ) : (
                tasks.map((task) => (
                    <TaskListItem key={task.id} task={task} />
                ))
            )}
        </div>
    );
};

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string,
            completed: PropTypes.bool.isRequired,
        }),
    ).isRequired,
};

export default TaskList;