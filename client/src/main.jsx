import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import fetchApi from "./services/api.services";

import App from "./App";

import HomePage from "./pages/HomePage/HomePage";

const baseJournalGalleryUrl = "/api/travelJournals";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => fetchApi(baseJournalGalleryUrl),
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
