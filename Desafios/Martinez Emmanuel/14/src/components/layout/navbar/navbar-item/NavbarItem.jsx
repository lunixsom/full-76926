import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import "./navbar-item.scss";

const NavbarItem = ({ path, label, isDynamic = false }) => {
    const location = useLocation();

    const getClassName = () => {
        const isActive = isDynamic
            ? location.pathname.startsWith(path)
            : location.pathname === path;

        return `navbar-item ${isActive ? "navbar-item--active" : ""}`;
    };

    return (
        <li className={getClassName()}>
            <Link to={path}>{label}</Link>
        </li>
    );
};

NavbarItem.propTypes = {
    path: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    isDynamic: PropTypes.bool,
};

export default NavbarItem;