import PropTypes from "prop-types";
import "./CounterControl.scss";
import { ButtonDanger, ButtonPrimary } from "@/components/buttons";

const CounterControl = ({ increment, reset }) => {
    return(
        <>
            <div className="counter-control">
                <ButtonPrimary type="submit" size="md" onClick={increment} className="counter-control__button counter-control__button--increment">
                    Incrementar
                </ButtonPrimary>

                <ButtonDanger type="submit" size="md" onClick={reset} className="counter-control__button counter-control__button--reset">
                    Reiniciar
                </ButtonDanger>
            </div>
        </>
    );
};

CounterControl.propTypes = {
    increment: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
};

export default CounterControl;