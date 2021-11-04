import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import {
  Box,useColorMode,
  Button
} from "@chakra-ui/react";
import routes from "routes";
import ScrollToTop from "components/scroll/ScrollToTop";
export default function MainLayout() {
  const { toggleColorMode } = useColorMode()
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      return <Route path={prop.path} component={prop.component} key={key} />;
    });
  };
  return (
    <ScrollToTop>
    <Button size="sm" onClick={toggleColorMode}>
      Toggle Mode
    </Button>
      <Switch>
        {getRoutes(routes)}
        <Redirect from="/" exact to="/homepage" />
        <Redirect from="*" to="/404" />
      </Switch>
    </ScrollToTop>
  );
}
