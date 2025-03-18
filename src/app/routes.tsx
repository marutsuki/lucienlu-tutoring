import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import ErrorBoundary from "@/app/routes/app/ErrorBoundary";
import App from "@/app/routes/app/root";
import NotFound from "@/app/routes/NotFound";
import Home from "@/app/routes/app/Home";
import Pricing from "@/app/routes/app/pricing/Pricing";
import AboutMe from "@/app/routes/app/aboutme/AboutMe";

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
