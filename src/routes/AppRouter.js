import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginScreen from "./../pages/LoginScreen";
import RedirectScreen from "./../pages/RedirectScreen";

const AppRouter = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={LoginScreen}></Route>
        <Route path="/redirect" component={RedirectScreen}></Route>
      </Switch>
    </React.Fragment>
  );
};

export default AppRouter;
