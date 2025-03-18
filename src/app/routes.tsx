import { createBrowserRouter } from "react-router";
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

export const routeComponents: { label: string; href: string }[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Me",
    href: "/aboutme",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Tutoring",
    href: "/tutoring",
  },
];

export type TutoringService = {
  name: string;
  url: string;
  imageUrl: string;
};

export const tutoringServices: TutoringService[] = [
  {
    name: "Web Development",
    url: "/web-dev",
    imageUrl: "/web-dev.jpg",
  },
  {
    name: "Object Oriented Design",
    url: "/oop",
    imageUrl: "/oop.jpg",
  },
  {
    name: "Web Development",
    url: "/web-dev",
    imageUrl: "/web-dev.jpg",
  },
  {
    name: "Introductory",
    url: "/introductory",
    imageUrl: "/introductory.jpg",
  },
];

const appRouter = createBrowserRouter([
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
          ...tutoringServices.map((service) => ({
            path: service.url.slice(1),
            element: <TutoringServicePage {...service} />,
          })),
          {
            path: "",
            element: <TutoringHome />,
          },
        ],
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
