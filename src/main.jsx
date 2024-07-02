import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RecipeProvider } from "./context/Recipe/RecipeContext.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Details from "./pages/Details";
import ErrorPage from "./pages/ErrorPage";
const router = createBrowserRouter(
  [
    {
      element: (
        <RecipeProvider>
          <App />
        </RecipeProvider>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/recipe-app-reactjs-interview-projects/",
          element: <Home />,
        },
        {
          path: "/favorites",
          element: <Favorites />,
        },
        {
          path: "/details/:recipeId",
          element: <Details />,
        },
      ],
    },
  ],
  // { basename: "/recipe-app-reactjs-interview-projects/" },
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
