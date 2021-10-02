import { Switch, Route } from "react-router-dom";
import React from "react";
import LoginScreen from "./../pages/LoginScreen";
import Dashboard from "./../pages/Dashboard";
import GDrive from "./../pages/GDrive";
import Contacts from "./../pages/Contacts";
import MyAccount from "./../pages/MyAccount";

const AppRouter = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={LoginScreen}></Route>

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
