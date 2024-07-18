import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import HomePage from "./pages/HomePage/HomePage";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      // {
      //   path: "/journal",
      //   element: <JounalPage />,
      // },
      // {
      //   path: "/connexion",
      //   element: <LoginPage />,
      // },
      // {
      //   path: "/registration",
      //   element: <RegistraionPage />,
      // },
      // {
      //   path: "/profilePage",
      //   element: <ProfilePage />,
      // },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
