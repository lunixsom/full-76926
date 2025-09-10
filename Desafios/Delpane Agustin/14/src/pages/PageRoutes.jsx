import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Tasks from "./tasks/Tasks";

const PageRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/tasks" element={<Tasks />} />
        </Routes>
    );
};

export default PageRoutes;