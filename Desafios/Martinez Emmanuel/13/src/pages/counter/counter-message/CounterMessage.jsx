import { Text } from "../../../components/texts";
import "./counter-message.scss";
import PropTypes from "prop-types";

const CounterMessage = ({ message, hours }) => {

    const showText = (hours) => {
        return hours > 0 ? `¡Excelente! Has estudiado ${hours} horas en total`: "Comienza tu sesión de estudio";
    };

    return (
        <div className="counter-messages">
            <Text className="counter-messages__message" variant="p">{showText(hours)}</Text>
            {message && <div className="counter-messages__alert">{message}</div>}
        </div>
    );
};

CounterMessage.propTypes = {
    message: PropTypes.string,
    hours: PropTypes.number.isRequired,
};

export default CounterMessage;