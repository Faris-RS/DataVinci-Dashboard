import { useEffect } from "react";
import { Navigate, useRoutes, useNavigate } from "react-router-dom";
// layouts
import DashboardLayout from "./layouts/dashboard";
//
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
// import Page404 from './pages/Page404';
import DashboardAppPage from "./pages/DashboardAppPage";
import Page404 from "./pages/Page404";

// ----------------------------------------------------------------------

export default function Router() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("DataVinciLogin")) {
      navigate("/login");
    }
  }, []);

  const routes = useRoutes([
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: "app", element: <DashboardAppPage /> },
        { path: "user", element: <UserPage /> },
      ],
    },
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "*",
      element: <Page404 />,
    },
  ]);

  return routes;
}
