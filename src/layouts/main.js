import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import routes from "routes";
export default function MainLayout() {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      return <Route path={prop.path} component={prop.component} key={key} />;
    });
  };
  return (
    <Switch>
      {getRoutes(routes)}
      <Redirect from='/' to='/homepage' />
    </Switch>
  );
}
