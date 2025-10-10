
import ButtonDanger from "../../../components/buttons/ButtonDanger";
import ButtonPrimary from "../../../components/buttons/ButtonPrimary";
import "./counter-control.scss";
import PropTypes from "prop-types";

const CounterControl = ({ onIncrement, onReset }) => {

    return (
        <div className="counter-control">
            <ButtonPrimary onClick={onIncrement}>Incrementar</ButtonPrimary>
            <ButtonDanger onClick={onReset}>Reiniciar</ButtonDanger>
        </div>
    );
};

CounterControl.propTypes = {
    onIncrement: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
};

export default CounterControl;