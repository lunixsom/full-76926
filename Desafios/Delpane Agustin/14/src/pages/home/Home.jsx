import { ButtonPrimary } from "@/components/buttons";
import { Text } from "@/components/texts";
import AppContext from "@/contexts/AppContext";
import { useContext } from "react";
import "./home.scss";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const taskData = useContext(AppContext);
    const { getCompletedCount, getTotalCount } = taskData;
    const navigate = useNavigate();

    return (
        <div className="home">
            <Text variant="h1">Bienvenido al gestor de tareas</Text>
            <Text variant="p">Total de tareas: {taskData.taskData.getTotalCount()}</Text>
            <Text variant="p">Completadas: {taskData.taskData.getCompletedCount()}</Text>
            <Text variant="p">Pendientes: {taskData.taskData.getTotalCount() - taskData.taskData.getCompletedCount()}</Text>
            <ButtonPrimary onClick={() => navigate("/tasks")} >Ver todas las tareas</ButtonPrimary>
        </div>
    );
};

export default Home;