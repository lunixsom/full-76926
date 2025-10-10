import PropTypes from "prop-types";
import "./CounterMessage.scss";

const CounterMessage = ({ message, showMessage }) => {
    return(
        <>
            <div className="counter-message">
                <p>{message}</p>
                {showMessage && (
                    <div className="counter-message__milestone">
                        <p>🎉 Congratulations! You've reached a study milestone.</p>
                    </div>)}
            </div>
        </>
    );
};

CounterMessage.propTypes = {
    message: PropTypes.string.isRequired,
    showMessage: PropTypes.bool.isRequired,
};

export default CounterMessage;