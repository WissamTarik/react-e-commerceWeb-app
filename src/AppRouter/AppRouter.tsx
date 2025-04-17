import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routesConfig } from "./routesConfig";

const AppRouter = () => {
  const router = createBrowserRouter(routesConfig);
  return <RouterProvider router={router} />;
};

export default AppRouter;
