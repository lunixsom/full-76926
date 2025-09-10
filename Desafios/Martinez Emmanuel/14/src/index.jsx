import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout";
import AppProvider from "./contexts/AppProvider";
import "./index.scss";
import { PageRoutes } from "./pages";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AppProvider>
            <BrowserRouter>
                <Layout>
                    <PageRoutes />
                </Layout>
            </BrowserRouter>
        </AppProvider>
    </StrictMode>,
);