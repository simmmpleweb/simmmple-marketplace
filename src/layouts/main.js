import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "routes";
import ScrollToTop from "components/scroll/ScrollToTop";
export default function MainLayout() {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      return <Route path={prop.path} component={prop.component} key={key} />;
    });
  };
  return (
    <ScrollToTop>
      <Switch>
        {getRoutes(routes)}
        <Redirect from='/' to='/homepage' />
      </Switch>
    </ScrollToTop>
  );
}
