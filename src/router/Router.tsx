import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";

import { Login } from "../componens/pages/Login";
import { homeRoutes } from "./HomeRoute";
import { Page404 } from "../componens/pages/Page404";
import { HeaderLayout } from "../componens/templates/HeaderLayout";
import { LoginUserProvider } from "../providers/LoginUserProvider";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <LoginUserProvider>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/home" render={({ match: { url } }) => (
          <Switch>
            {homeRoutes.map((route) => (
              <Route 
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                <HeaderLayout>{route.children}</HeaderLayout>
              </Route>
            ))}
          </Switch>
        )} />
      </LoginUserProvider>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  )
});