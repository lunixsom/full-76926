import React from "react";
import { Route, Routes } from "react-router-dom";
import Tasks from "./tasks/Tasks";
import Home from "./home/Home";

const PageRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
        </Routes>
    );
};

export default PageRoutes;