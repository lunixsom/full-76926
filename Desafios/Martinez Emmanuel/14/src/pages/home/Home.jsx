import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonPrimary } from "@/components/buttons";
import { Text } from "@/components/texts";
import AppContext from "@/contexts/AppContext";
import "./home.scss";

const Home = () => {
    const { getTotalCount, getCompletedCount } = useContext(AppContext);
    const navigate = useNavigate();

    const total = getTotalCount();
    const completed = getCompletedCount();
    const pending = total - completed;

    return (
        <div className="home">
            <Text className="home__text" variant="p">Total de Tareas: {total}</Text>
            <Text className="home__text" variant="p">Completadas: {completed}</Text>
            <Text className="home__text" variant="p">Pendientes: {pending}</Text>

            <ButtonPrimary
                className="home__button"
                onClick={() => navigate("/tasks")}>
        Ver todas las tareas
            </ButtonPrimary>
        </div>
    );
};

export default Home;