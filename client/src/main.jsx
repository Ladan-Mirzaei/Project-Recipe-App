import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home";
import Travelplanner from "./pages/Travelplanner";
import RecipeSearch from "./pages/API";
import Planner from "./pages/Travelplanner/planner.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "travelplanner",
        element: <Travelplanner />,
      },
      {
        path: "travelplanner/planner",
        element: <Planner />,
      },
      {
        path: "api",
        element: <RecipeSearch />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
