import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import ErrorBoundary from "./routes/app/ErrorBoundary";
import App from "./routes/app/root";
import NotFound from "./routes/NotFound";
import Home from "./routes/app/Home";

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
    ],
  },
  {
    path: "/aboutme",
    element: <div>Hello World</div>,
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
