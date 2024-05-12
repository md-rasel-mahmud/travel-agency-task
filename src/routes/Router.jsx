import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import Reports from "../pages/Reports";
import Calender from "../pages/Calender";
import CustomPrice from "../pages/CustomPrice";
import MasterPrice from "../pages/MasterPrice";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MasterPrice />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/master-price",
        element: <Dashboard />,
      },
      {
        path: "/report",
        element: <Reports />,
      },
      {
        path: "/calendar",
        element: <Calender />,
      },
      {
        path: "/custom-price",
        element: <CustomPrice />,
      },
    ],
  },
]);
