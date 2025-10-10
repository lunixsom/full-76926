import PropTypes from "prop-types";
import "./CounterDisplay.scss";

const CounterDisplay = (props) => {
    const { hours } = props;

    const hourFormat = String(hours).padStart(3, "0");

    return(
        <>
            <div className="counter-display">
                <h3>Horas de estudio</h3>
                <span className="counter-display__hour">
                    {hourFormat} Hs.
                </span>
            </div>
        </>
    );
};

CounterDisplay.propTypes = {
    hours: PropTypes.number.isRequired,
};

export default CounterDisplay;