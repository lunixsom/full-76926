import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import "./navbar-item.scss";

const NavbarItem = ({ path, label }) => {
    const location = useLocation();

    const getClassName = () => {
        const isActive = (location.pathname ===path);

        return `navbar-item ${isActive ? "navbar-item--active" : ""}`;
    };

    return (
        <li className={getClassName(path)}>
            <Link to={path}>{label}</Link>
        </li>
    );
};

NavbarItem.propTypes = {
    path: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default NavbarItem;