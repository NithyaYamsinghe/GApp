import { Switch, Route } from "react-router-dom";
import React from "react";
import LoginScreen from "./../pages/LoginScreen";

const AppRouter = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={LoginScreen}></Route>
      </Switch>
    </React.Fragment>
  );
};

export default AppRouter;
