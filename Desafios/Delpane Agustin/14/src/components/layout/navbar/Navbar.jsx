import NavbarItem from "./navbar-item/NavbarItem";
import { navbarItems } from "./navbar.config";
import "./navbar.scss";

const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="navbar__menu">
                { navbarItems.map((item) => (
                    <NavbarItem path={item.path} label={item.label} key={item.path} />
                ))}
            </ul>
        </div>
    );
};

export default Navbar;