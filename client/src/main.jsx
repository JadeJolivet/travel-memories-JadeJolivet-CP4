import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage/HomePage";
import JournalPage from "./pages/JournalPage/JournalPage";
import NewJournalPage from "./pages/NewJournalPage/NewJournalPage";
import JournalEdit from "./components/JournalEdit/JournalEdit";
import { fetchApi, sendData } from "./services/api.services";

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
      {
        path: "/journal",
        element: <JournalPage />,
        loader: () => fetchApi(baseJournalGalleryUrl),
      },
      {
        path: "/newJournal",
        element: <NewJournalPage />,
        action: async ({ request }) => {
          const formData = await request.formData();
          const title = formData.get("title");
          const coverImage = formData.get("cover_image");
          const theme = formData.get("theme");

          await sendData(
            baseJournalGalleryUrl,
            {
              title,
              coverImage,
              theme,
            },
            "POST"
          );

          return redirect("/");
        },
      },
      {
        path: "/edit/:id",
        element: <JournalEdit />,
        loader: async ({ params }) =>
          fetchApi(`${baseJournalGalleryUrl}/${params.id}`),
        action: async ({ request, params }) => {
          const formData = await request.formData();
          const title = formData.get("title");
          const coverImage = formData.get("coverImage");

          switch (request.method.toUpperCase()) {
            case "PUT": {
              await sendData(
                `${baseJournalGalleryUrl}/${params.id}`,
                {
                  title,
                  coverImage,
                },
                "PUT"
              );
              return redirect("/");
            }
            case "DELETE": {
              await sendData(
                `${baseJournalGalleryUrl}/${params.id}`,
                {},
                "DELETE"
              );
              return redirect("/");
            }
            default:
              throw new Response("", { status: 405 });
          }
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
