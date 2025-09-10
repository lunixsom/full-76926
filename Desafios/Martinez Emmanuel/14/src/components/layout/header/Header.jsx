import { Text } from "@/components/texts";
import "./header.scss";

const Header = () => {
    return (
        <div className="header">
            <Text className="header__title" variant="h1">Task Manager</Text>
        </div>
    );
};

export default Header;