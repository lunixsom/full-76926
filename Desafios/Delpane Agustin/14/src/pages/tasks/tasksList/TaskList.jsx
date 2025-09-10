import AppContext from "@/contexts/AppContext";
import React, { useContext } from "react";
import { Text } from "@/components/texts";
import TaskListItem from "../tasksListItem/TaskListItem";
import "./taskList.scss";

const TaskList = () => {

    const { taskData } = useContext(AppContext);
    const { tasks } = taskData;

    if ( !tasks.length ) return (
        <>
            <Text variant="h3">No hay tareas disponibles</Text>
            <Text variant="p">¡Crea tu primera tarea para comenzar!</Text>
        </>);
    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <TaskListItem key={task.id} task={task} />
            ))}
        </ul>
    );
};

export default TaskList;