import PropTypes from "prop-types";
import AppContext from "./AppContext";
import useTasks from "@/hooks/useTasks";

const AppProvider = (props) => {
    const { children } = props;
    const taskData = useTasks();

    return (
        <AppContext.Provider
            value={{
                taskData,
            }}>
            {children}
        </AppContext.Provider>
    );
};

AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppProvider;