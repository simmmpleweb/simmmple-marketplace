import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import homeBg from "assets/img/home-background.png";
import routes from "routes";
export default function MainLayout() {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      return <Route path={prop.path} component={prop.component} key={key} />;
    });
  };
  const getActiveNavbar = (routes) => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveNavbar = getActiveNavbar(routes[i].items);
        if (collapseActiveNavbar !== activeNavbar) {
          return collapseActiveNavbar;
        }
      } else if (routes[i].category) {
        let categoryActiveNavbar = getActiveNavbar(routes[i].items);
        if (categoryActiveNavbar !== activeNavbar) {
          return categoryActiveNavbar;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].secondaryNavbar;
        }
      }
    }
    return activeNavbar;
  };
  return (
    <Switch>
      {getRoutes(routes)}
      <Redirect from='/' to='/homepage' />
    </Switch>
  );
}
