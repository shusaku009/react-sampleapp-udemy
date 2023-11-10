import { Home } from "../componens/pages/Home";
import { Page404 } from "../componens/pages/Page404";
import { Setting } from "../componens/pages/Setting";
import { UserManagement } from "../componens/pages/UserManagement";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/user_management",
    exact: false,
    children: <UserManagement />
  },
  {
    path: "/setting",
    exact: false,
    children: <Setting />
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />
  }
];