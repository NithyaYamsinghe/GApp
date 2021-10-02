import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginScreen from "./../pages/LoginScreen";
import RedirectScreen from "./../pages/RedirectScreen";

import Dashboard from "./../pages/Dashboard";
import GDrive from "./../pages/GDrive";
import Contacts from "./../pages/Contacts";
import MyAccount from "./../pages/MyAccount";

const AppRouter = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={LoginScreen}></Route>
        <Route path="/redirect" component={RedirectScreen}></Route>

        <Dashboard>
          <Route exact path="/gdrive" component={GDrive} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/myaccount" component={MyAccount} />
        </Dashboard>
      </Switch>
    </React.Fragment>
  );
};

export default AppRouter;
