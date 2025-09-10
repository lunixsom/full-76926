import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppProvider from "./contexts/AppProvider";
import "./index.scss";
import PageRoutes from "./pages/PageRoutes";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <AppProvider>
                <Layout>
                    <PageRoutes/>
                </Layout>
            </AppProvider>
        </BrowserRouter>
    </StrictMode>,
);