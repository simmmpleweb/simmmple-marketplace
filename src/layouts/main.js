import ScrollToTop from "components/scroll/ScrollToTop";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "routes";
export default function MainLayout() {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      return <Route path={prop.path} exact={prop.exact} component={prop.component} key={key} />;
    });
  };
  return (
    <ScrollToTop>
      <Switch>
        {getRoutes(routes)}
        <Redirect from='*' to='/404' />
      </Switch>
    </ScrollToTop>
  );
}
