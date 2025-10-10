
import { Text } from "../../../components/texts";
import "./counter-display.scss";
import PropTypes from "prop-types";

const CounterDisplay = ({ hours }) => {

    const formatHours = (num) => {
        return String(num).padStart(3, "0");
    };

    return (
        <div className="counter-display">

            <div className="counter-display__container">
                <Text variant="h2" className="counter-display__container__title">Horas de estudio</Text>
                <Text variant="p" className="counter-display__container__time">{formatHours(hours)} Hs.</Text>
            </div>

        </div>
    );
};

CounterDisplay.propTypes = {
    hours: PropTypes.number,
};

export default CounterDisplay;