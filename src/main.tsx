import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import HousePage from "./pages/House.page.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/gloria",
        element: <HousePage name="Gloria" />,
    },
    {
        path: "/katalina",
        element: <HousePage name="Katalina" />,
    },
    {
        path: "/maria",
        element: <HousePage name="Maria" />,
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
