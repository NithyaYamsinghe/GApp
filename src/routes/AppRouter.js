import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginScreen from "./../pages/LoginScreen";
import RedirectScreen from "./../pages/RedirectScreen";
import GoogleDriveScreen from "../pages/GoogleDriveScreen";
import ContactsScreen from "./../pages/ContactsScreen";
import ProfileScreen from "./../pages/ProfileScreen";
import DashboardScreen from "./../pages/DashboardScreen";
import FileUploadScreen from "./../pages/FileUploadScreen";

const AppRouter = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={LoginScreen}></Route>
        <Route path="/redirect" component={RedirectScreen}></Route>
        <DashboardScreen>
          <Route exact path="/gdrive" component={GoogleDriveScreen} />
          <Route exact path="/contacts" component={ContactsScreen} />
          <Route exact path="/profile" component={ProfileScreen} />
          <Route exact path="/upload" component={FileUploadScreen} />
        </DashboardScreen>
      </Switch>
    </React.Fragment>
  );
};

export default AppRouter;
