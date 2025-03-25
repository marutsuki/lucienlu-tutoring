import { createHashRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import ErrorBoundary from "@/app/routes/app/ErrorBoundary";
import App from "@/app/routes/app/root";
import NotFound from "@/app/routes/NotFound";
import Home from "@/app/routes/app/Home";
import Pricing from "@/app/routes/app/pricing/Pricing";
import AboutMe from "@/app/routes/app/aboutme/AboutMe";
import Tutoring from "@/app/routes/app/tutoring/Tutoring";
import TutoringServicePage from "./routes/app/tutoring/service/TutoringServicePage";
import TutoringHome from "./routes/app/tutoring/root/TutoringHome";
import { tutoringServices } from "@/config/tutoring.config";
import Contact from "./routes/app/contact/Contact";

const appRouter = createHashRouter([
  {
    path: "/",
    element: <App />,
    ErrorBoundary,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aboutme",
        element: <AboutMe />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/tutoring",
        element: <Tutoring />,
        children: [
          ...tutoringServices
            .flatMap((group) => group.services)
            .map((service) => ({
              path: service.url.slice(1),
              element: <TutoringServicePage {...service} />,
            })),
          {
            path: "",
            element: <TutoringHome />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={appRouter} />;
};

export default AppRouter;
