import { Text } from "@/components/texts";
import "./home.scss";
import CounterDisplay from "../../components/CounterDisplay/CounterDisplay";
import { useEffect } from "react";
import { useState } from "react";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterMessage from "../../components/CounterMessage/CounterMessage";
import { useRef } from "react";

const Home = () => {

    const [ hours, setHours ] = useState(0);
    const [ showMessage, setShowMessage ] = useState(false);
    const [ displayHourMessage, setHourMessage ] = useState("");
    const timerRef = useRef(null);

    const increment = () => {
        setHours(hours + 1);
    };

    const reset = () => {
        setHours(0);
        setShowMessage(false);
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    };

    useEffect(() => {
        if(hours >= 1){
            setHourMessage("¡Excelente! Has estudiado " + hours + " horas en total.");
        }

        else if(hours === 0){
            setHourMessage("¡Comienza tu sesion de estudio!");
        }
    }, [hours]);

    useEffect(() => {
        if (hours > 0 && hours % 5 === 0) {
            setShowMessage(true);

            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }

            timerRef.current = setTimeout(() => {
                setShowMessage(false);
                timerRef.current = null;
            }, 3000);
        }

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
                timerRef.current = null;
            }
        };
    }, [hours]);

    return (
        <div className="home">
            <Text variant="h1">Contador de horas de estudio</Text>
            <CounterDisplay hours={hours}/>
            <CounterControl increment={() => increment()} reset={() => reset()}/>
            <CounterMessage message={displayHourMessage} showMessage={showMessage}/>
        </div>
    );
};

export default Home;