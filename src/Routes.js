import { Route, Switch } from "react-router-dom";
import React from "react";
import HomePage from "./containers/HomePage/HomePage";
import MainPage from "./containers/MainPage/MainPage";
import SignInPage from "./containers/SignInPage/SignInPage";
import InitialPage from "./containers/InitialPage/InitialPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={InitialPage} />
      <Route exact path="/get-started" component={MainPage} />
      <Route exact path="/sign-in" component={SignInPage} />
      <Route exact path="/home" component={HomePage} />
    </Switch>
  );
};

export default Routes;
