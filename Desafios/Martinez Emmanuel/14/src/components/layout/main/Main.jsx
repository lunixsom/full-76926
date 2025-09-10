import PropTypes from "prop-types";
import "./main.scss";

const Main = (props) => {
    const { children } = props;

    return (
        <div className="main">
            {children}
        </div>
    );
};

Main.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Main;