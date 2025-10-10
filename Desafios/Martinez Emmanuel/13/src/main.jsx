import App from "@/App.jsx";
import "@/main.scss";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App/>
    </StrictMode>,
);