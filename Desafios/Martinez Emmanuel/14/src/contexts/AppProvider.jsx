import PropTypes from "prop-types";
import AppContext from "./AppContext";
import useTasks from "@/hooks/useTasks";

const AppProvider = ({ children }) => {
    const tasksApi = useTasks();
    return (
        <AppContext.Provider value={tasksApi}>
            {children}
        </AppContext.Provider>
    );
};

AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppProvider;