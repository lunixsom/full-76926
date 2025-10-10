import { useState, useEffect, useRef } from "react";
import { Text } from "../../components/texts";
import CounterControl from "./counter-control/CounterControl.jsx";
import CounterDisplay from "./counter-display/CounterDisplay.jsx";
import CounterMessage from "./counter-message/CounterMessage.jsx";
import { messages } from "../../utils/massages.js";
import "./home.scss";

const Home = () => {
    const [ hours, setHours ] = useState(0);
    const [ message, setMessage ] = useState(messages[0]);

    const messageTimerRef = useRef(null);

    const incrementHours = () => {
        setHours((prev) => prev + 1);
    };

    const resetHours = () => {
        setHours(0);
    };

    useEffect(() => {
    // Calcular índice según cada 3 horas: 3 → 0, 6 → 1, 9 → 2...
        const index = (hours / 3) - 1;
        const newMessage = messages[index] || "";

        setMessage(newMessage);

        // Limpiar timeout previo
        if (messageTimerRef.current) clearTimeout(messageTimerRef.current);

        // Si hay mensaje, programar limpieza a los 3 segundos
        if (newMessage) {
            messageTimerRef.current = setTimeout(() => {
                setMessage("");
            }, 3000);
        }

        // Limpiar timeout si el componente se desmonta o cambia hours
        return () => {
            if (messageTimerRef.current) clearTimeout(messageTimerRef.current);
        };
    }, [hours]);

    return (
        <div className="home">
            <Text variant="h1">Contador de horas de estudio</Text>

            <CounterDisplay hours={hours} />

            <CounterControl
                onIncrement={incrementHours}
                onReset={resetHours}/>

            <CounterMessage
                message={message}
                hours={hours}/>

        </div>
    );
};

export default Home;